const PRODUCT_WITH_VALID_CATEGORY_MIN = {
    category_id: 1,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_VALID_CATEGORY_MAX = {
    category_id: 15,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_CATEGORY_MIN = {
    category_id: 0,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_CATEGORY_MAX = {
    category_id: 16,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_EMPTY_TITLE = {
    category_id: 5,
    title: null,
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_NEGATIVE_PRICE = {
    category_id: 5,
    title: null,
    alias: 'title',
    content: 'content',
    price: -1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_PRICE_TYPE = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 'title',
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_NEGATIVE_OLD_PRICE = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 100,
    old_price: -100,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_TYPE_OLD_PRICE = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 100,
    old_price: 'title',
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_STATUS_VALID_0 = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 0,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_STATUS_VALID_1 = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_NEGATIVE_STATUS = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: -1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_STATUS_2 = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 2,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_VALID_HIT_1 = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 1,
}

const PRODUCT_WITH_VALID_HIT_0 = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 100,
    old_price: 100,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

const PRODUCT_WITH_INVALID_NEGATIVE_HIT = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 0,
    keywords: 'title',
    description: '123',
    hit: -1,
}

const PRODUCT_WITH_INVALID_HIT_2 = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 100,
    status: 0,
    keywords: 'title',
    description: '123',
    hit: 2,
}

const EDIT_PRODUCT_TESTS = {
    PRODUCT_WITH_VALID_CATEGORY_MIN: {
        name: 'reate item with valid category 1',
        item: PRODUCT_WITH_VALID_CATEGORY_MIN,
        expectedStatus: 1,
    },
    PRODUCT_WITH_VALID_CATEGORY_MAX: {
        name: 'create item with valid category 15',
        item: PRODUCT_WITH_VALID_CATEGORY_MAX,
        expectedStatus: 1,
    },
    PRODUCT_WITH_INVALID_CATEGORY_MIN: {
        name: 'create item with invalid category 0',
        item: PRODUCT_WITH_INVALID_CATEGORY_MIN,
        expectedStatus: 0,
    },
    PRODUCT_WITH_INVALID_CATEGORY_MAX: {
        name: 'create item with invalid category 16',
        item: PRODUCT_WITH_VALID_CATEGORY_MAX,
        expectedStatus: 0,
    },
    PRODUCT_WITH_EMPTY_TITLE: {
        name: 'create product with empty title',
        item: PRODUCT_WITH_EMPTY_TITLE,
        expectedStatus: 0,
    },
    PRODUCT_WITH_NEGATIVE_PRICE: {
        name: 'create product with negative price',
        item: PRODUCT_WITH_NEGATIVE_PRICE,
        expectedStatus: 0,
    },
    PRODUCT_WITH_INVALID_PRICE_TYPE: {
        name: 'create product with invalid price type',
        item: PRODUCT_WITH_INVALID_PRICE_TYPE,
        expectedStatus: 0,
    },
    PRODUCT_WITH_NEGATIVE_OLD_PRICE: {
        name: 'create product with negative old price',
        item: PRODUCT_WITH_NEGATIVE_OLD_PRICE,
        expectedStatus: 0,
    },
    PRODUCT_WITH_INVALID_TYPE_OLD_PRICE: {
        name: 'create product with invalid type old price',
        item: PRODUCT_WITH_INVALID_TYPE_OLD_PRICE,
        expectedStatus: 0,
    },
    PRODUCT_WITH_STATUS_VALID_0: {
        name: 'create product with valid status 0',
        item: PRODUCT_WITH_STATUS_VALID_0,
        expectedStatus: 1,
    },
    PRODUCT_WITH_STATUS_VALID_1: {
        name: 'create product with valid status 1',
        item: PRODUCT_WITH_STATUS_VALID_1,
        expectedStatus: 1,
    },
    PRODUCT_WITH_INVALID_NEGATIVE_STATUS: {
        name: 'create product with invalid negative status',
        item: PRODUCT_WITH_INVALID_NEGATIVE_STATUS,
        expectedStatus: 0,
    },
    PRODUCT_WITH_INVALID_STATUS_2: {
        name: 'create product with invalid status 2',
        item: PRODUCT_WITH_INVALID_STATUS_2,
        expectedStatus: 0,
    },
    PRODUCT_WITH_VALID_HIT_0: {
        name: 'create product with valid hit 0',
        item: PRODUCT_WITH_VALID_HIT_0,
        expectedStatus: 1,
    },
    PRODUCT_WITH_VALID_HIT_1: {
        name: 'create product with valid hit 0',
        item: PRODUCT_WITH_VALID_HIT_1,
        expectedStatus: 1,
    },
    PRODUCT_WITH_INVALID_HIT_2: {
        name: 'create product with invalid hit 2',
        item: PRODUCT_WITH_INVALID_HIT_2,
        expectedStatus: 0,
    },
    PRODUCT_WITH_INVALID_NEGATIVE_HIT: {
        name: 'create product with invalid negative hit',
        item: PRODUCT_WITH_INVALID_NEGATIVE_HIT,
        expectedStatus: 0,
    },
}

const DEFAULT_PRODUCT = {
    category_id: 5,
    title: 'title',
    alias: 'title',
    content: 'content',
    price: 1000,
    old_price: 10,
    status: 1,
    keywords: 'title',
    description: '123',
    hit: 0,
}

export {
    EDIT_PRODUCT_TESTS,
    DEFAULT_PRODUCT,
}