import fetch from 'node-fetch';
import parser from 'node-html-parser';
import fs from "fs";

const baseUrl = 'http://91.210.252.240/broken-links/';

let validLinks = []
let brokenLinks = []
let checkedLinks = []

let dom = ""
async function findBrokenLinks(path) {
    let endpoint = baseUrl + path
    if (checkedLinks.includes(endpoint) || path == '#' || path == undefined) {
        return
    }
    if (path.startsWith("http://") || path.startsWith("https://") || path.startsWith("ftp://")) {
        if (!checkedLinks.includes(path))
            validLinks.push({ path: path, status: 200 })
        checkedLinks.push(path)
        return
    }
    checkedLinks.push(endpoint)
    const response = await fetch(endpoint)
    if (response.status < 400) {
        validLinks.push({ path: endpoint, status: response.status })
        const root = parser.parse(await response.text())
        const aTags = root.querySelectorAll('a')
        for (let aTag of aTags) {
            const path = aTag.getAttribute('href')
            await findBrokenLinks(path)
        }
    } else {
        brokenLinks.push({ path: endpoint, status: response.status })
    }
}

async function asyncFindBrokenLinks() {
    await findBrokenLinks("")
    fs.writeFileSync('brokenLinks.txt', JSON.stringify(brokenLinks, null, '\t'))
    fs.appendFileSync('brokenLinks.txt', brokenLinks.length.toString())
    fs.writeFileSync('validLinks.txt', JSON.stringify(validLinks, null, '\t'))
    fs.appendFileSync('validLinks.txt', validLinks.length.toString())
}

asyncFindBrokenLinks()