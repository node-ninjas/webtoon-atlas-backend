import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
    URL: {
        type: String,
    },
})

const Image = mongoose.model('Image', imageSchema)

export { imageSchema, Image }
