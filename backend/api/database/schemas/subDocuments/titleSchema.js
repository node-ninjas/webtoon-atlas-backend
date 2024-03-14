import mongoose from 'mongoose'

export const titleSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    language: {
        type: String,
        required: true,
        enum: ['German', 'Korean', 'Chinese', 'English'],
    },
})
