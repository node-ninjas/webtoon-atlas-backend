import mongoose from 'mongoose'

export const genresSchema = new mongoose.Schema({
    genres: {
        type: [String],
        required: true,
    },
})