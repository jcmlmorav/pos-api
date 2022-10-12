import { Schema, model } from 'mongoose'

const productSchema = new Schema({
  code: String,
  name: String,
  inventory: Number,
  available: Boolean
})

const Product = model('Product', productSchema)

export default Product
