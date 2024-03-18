import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
    title: String,
    body: String,
})

const Image = mongoose.model('Image', imageSchema)

export { imageSchema, Image }
