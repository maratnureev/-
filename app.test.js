import fetch from 'node-fetch';
import { ADD_PRODUCT_TESTS, ALIAS_TESTS } from './addProductTests'
import { EDIT_PRODUCT_TESTS, DEFAULT_PRODUCT } from './editProductTests'
import { DELETE_TEST } from './deleteProductTests'

const URL = 'http://91.210.252.240:9010/api/';
const GET = 'GET';
const POST = 'POST';
const MIN_CATEGORY_ID = 1;
const MAX_CATEGORY_ID = 15;
const MIN_STATUS = 0;
const MAX_STATUS = 1;
const MIN_HIT = 0;
const MAX_HIT = 1;

function getProductById(products, id) {
    return products.find(product => product.id == id)
}

function getProductList() {
    return fetch(URL + 'products', {
            method: GET,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            return response.json()
        })

}

function deleteProduct(id) {
    return fetch(URL + `deleteproduct?id=${id}`, {
            method: GET,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            return response.json()
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
        .then(response => {
            return response.json()
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
        .then(response => {
            return response.json()
        })
}

function isNumber(a) {
    return typeof(a) == 'number'
}

function assertProductValid(product) {
    if (!isNumber(Number(product.id))) {
        return `invalid product id ${product.id}`
    }
    if (!isNumber(Number(product.category_id)) || Number(product.category_id) < MIN_CATEGORY_ID || Number(product.category_id) > MAX_CATEGORY_ID) {
        return `invalid product category_id ${product.category_id}`
    }
    if (!isNumber(Number(product.price))) {
        return `invalid product price ${product.price}`
    }
    if (!isNumber(Number(product.old_price))) {
        return `invalid product old_price ${product.old_price}`
    }
    if (!isNumber(Number(product.status)) || Number(product.status) < MIN_STATUS || Number(product.status) > MAX_STATUS) {
        return `invalid product status ${product.status}`
    }
    if (!isNumber(Number(product.hit)) || Number(product.hit) < MIN_HIT || Number(product.hit) > MAX_HIT) {
        return `invalid product hit ${product.hit}`
    }
    return '';
}

test('test get product list', async() => {
    const productList = await getProductList()
    expect(Array.isArray(productList)).toBeTruthy()
})

test('test delete valid product', async() => {
    const result = await addProduct(DELETE_TEST.VALID_PRODUCT)
    const deleteResult = await deleteProduct(result.id)
    expect(deleteResult.status).toBe(1)
    const productsList = await getProductList()
    expect(getProductById(productsList, result.id)).toBeFalsy()

    const nonExistingDeleteResult = await deleteProduct(result.id)
    expect(nonExistingDeleteResult.status).toBe(0)
})

test('test delete product with invalid id', async() => {
    const deleteResult = await deleteProduct('invalid string id')
    expect(deleteResult.status).toBe(0)
})

describe('add product tests', () => {
    let newProductIds = []
    afterEach(() => {
        newProductIds.forEach(async productId => {
            await deleteProduct(productId)
        })
        newProductIds = []
    })

    Object.values(ADD_PRODUCT_TESTS).forEach(testcase => {
        it(testcase.name, async() => {
            let resultStatus
            try {
                const result = await addProduct(testcase.item)
                if (result.status === 1) {
                    newProductIds = [result.id]
                }
                resultStatus = result.status
            } catch {
                resultStatus = 0
            }
            expect(resultStatus).toBe(testcase.expectedStatus)
        })
    })

    it('alias creation test', async() => {
        const result1 = await addProduct(ALIAS_TESTS.FIRST_PRODUCT)
        const result2 = await addProduct(ALIAS_TESTS.SECOND_PRODUCT)
        newProductIds = [result1.id, result2.id]
        const products = await getProductList()
        const product1 = getProductById(products, result1.id)
        const product2 = getProductById(products, result2.id)
        const aliasRegex = /-0/gi
        const alias1RegexRes = product1.alias.match(aliasRegex) || []
        const alias2RegexRes = product2.alias.match(aliasRegex) || []
        expect(alias2RegexRes.length - alias1RegexRes.length).toBe(1)
    })
})

describe('edit product tests', () => {
    let newProductIds = []
    afterEach(() => {
        newProductIds.forEach(async productId => {
            await deleteProduct(productId)
        })
        newProductIds = []
    })

    Object.values(EDIT_PRODUCT_TESTS).forEach(testcase => {
        it(testcase.name, async() => {
            const result = await addProduct(DEFAULT_PRODUCT)
            if (result.status === 1) {
                newProductIds = [result.id]
            }
            let editResultStatus
            try {
                const editResult = await editProduct({
                    ...testcase.item,
                    id: result.id,
                })
                editResultStatus = editResult.status
            } catch {
                editResultStatus = 0
            }
            expect(editResultStatus).toBe(testcase.expectedStatus)
        })
    })
})