import fetch from 'node-fetch';

function getProductListRequest() {
    return fetch(URL + 'products', {
        method: GET,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

function deleteProductRequest(id) {
    return fetch(URL + `deleteproduct?id=${id}`, {
        method: GET,
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

function addProduct(product) {
    return fetch(URL + 'addproduct', {
        method: POST,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
}

function editProduct(product) {
    return fetch(URL + 'editproduct', {
        method: POST,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
    })
}