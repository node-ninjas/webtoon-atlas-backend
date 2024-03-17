import mongoose from 'mongoose'

export const genreSchema = new mongoose.Schema(
    {
        genre: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'genres',
        timestamps: true,
    }
)

export const Genre = mongoose.model('Genre', genreSchema)
