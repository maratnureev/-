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
        let hrefTags = root.querySelectorAll('a')
        let srcTags = root.querySelectorAll('img')
        let actionTags = root.querySelectorAll('form')
        srcTags = srcTags.concat(root.querySelectorAll('script'))
        srcTags = srcTags.concat(root.querySelectorAll('iframe'))
        hrefTags = hrefTags.concat(root.querySelectorAll('link'))
        for (let srcTag of srcTags) {
            const path = srcTag.getAttribute('src')
            await findBrokenLinks(path)
        }
        for (let hrefTag of hrefTags) {
            const path = hrefTag.getAttribute('href')
            await findBrokenLinks(path)
        }
        for (let actionTag of actionTags) {
            const path = actionTag.getAttribute('action')
            await findBrokenLinks(path)
        }
    } else {
        brokenLinks.push({ path: endpoint, status: response.status })
    }
}

async function asyncFindBrokenLinks() {
    await findBrokenLinks("")
    fs.writeFileSync('brokenLinks.txt', JSON.stringify(brokenLinks, null, '\t'))
    fs.appendFileSync('brokenLinks.txt', "\n" + brokenLinks.length.toString())
    fs.appendFileSync('brokenLinks.txt', "\n" + new Date().toString())
    fs.writeFileSync('validLinks.txt', JSON.stringify(validLinks, null, '\t'))
    fs.appendFileSync('validLinks.txt', "\n" + validLinks.length.toString())
    fs.appendFileSync('validLinks.txt', "\n" + new Date().toString())
}

asyncFindBrokenLinks()