const PRODUCTS = [
    {
        id: '1',
        code: '1',
        name: 'Papa',
        inventory: 15,
        available: true
    },
    {
        id: '2',
        code: '2',
        name: 'Platano',
        inventory: 200,
        available: true
    },
    {
        id: '3',
        code: '3',
        name: 'Yuca',
        inventory: 62,
        available: false
    }
]

export default {
    Query: {
        products: () => PRODUCTS
    }
}
