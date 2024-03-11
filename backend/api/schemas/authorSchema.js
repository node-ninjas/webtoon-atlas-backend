import mongoose from 'mongoose'

export const authorSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
    },
    {
        collection: 'authors',
        timestamps: true,
    }
)

export const Author = new mongoose.model('Author', authorSchema)
