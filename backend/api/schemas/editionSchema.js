import mongoose from 'mongoose'

export const editionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        author: []
    },
    {
        collection: 'edition',
    }
)

export const Edition = mongoose.model('Edition', editionSchema)
