import mongoose from 'mongoose'

export const authorSchema = new mongoose(
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

export const Author = new model('Author', authorSchema)
