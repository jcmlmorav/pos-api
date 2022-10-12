import Product from './schemas/Product'

export default {
  Query: {
    products: async () => {
      const products = await Product.find()
      return products
    }
  },
  Mutation: {
    addProduct: async (_: any, { content }: any) => {
      const newProduct = new Product({
        code: content.code,
        name: content.name,
        inventory: content.inventory,
        available: content.available
      })

      newProduct.id = newProduct._id

      await newProduct.save((err) => err)

      return newProduct
    }
  }
}
