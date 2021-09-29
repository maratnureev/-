import parser from 'node-html-parser'
import fetch from 'node-fetch'
import fs from 'fs'

const URL_TO_CHECK = 'http://91.210.252.240/broken-links/'

async function checkUrl(url) {
    console.log(url)
    const response = await fetch(url)
    return {
        isValid: response.status < 400,
        response,
    }
}

async function checkPage(pageUrl, baseUrl, visitedUrls, validUrls, invalidUrls) {
    if (!pageUrl.startsWith('http')) {
        pageUrl = baseUrl + pageUrl;
    }
    if (visitedUrls.includes(pageUrl)) {
        return
    }
    const { isValid, response } = await checkUrl(pageUrl)
        // console.log(isValid, response.text())
    if (!isValid) {
        invalidUrls.push({
            url: pageUrl,
            statusCode: response.status,
        })
        visitedUrls.push(pageUrl)
        return
    }

    validUrls.push({
        url: pageUrl,
        statusCode: response.status,
    })
    visitedUrls.push(pageUrl)

    const text = await response.text()
    const body = parser.parse(text)
    const tags = body.querySelectorAll('a');
    for (let i = 0; i < tags.length; i++) {
        const tag = tags[i]

        if (tag.attributes.hasOwnProperty('href')) {
            const tagUrl = tag.attributes.href
            if (tagUrl && !tagUrl.startsWith('#')) {
                await checkPage(tagUrl, baseUrl, visitedUrls, validUrls, invalidUrls)
            }
        }
    }
}

async function checkSite(siteUrl) {
    const visitedUrls = []
    const validUrls = []
    const invalidUrls = []

    await checkPage('', siteUrl, visitedUrls, validUrls, invalidUrls)

    return {
        validUrls,
        invalidUrls,
    }
}


function printInfoToFile(fileName, links, date) {
    fs.writeFileSync(fileName, JSON.stringify(links, null, '\t') +
        `\nlinks count: ${links.length}\nDate of last check: ${date}`);
}

async function runCheckBrokenLinks(siteUrl) {
    const { validUrls, invalidUrls } = await checkSite(siteUrl)

    const date = new Date();
    printInfoToFile('valid_urls.txt', validUrls, date)
    printInfoToFile('invalid_urls.txt', invalidUrls, date)
}


runCheckBrokenLinks(URL_TO_CHECK)