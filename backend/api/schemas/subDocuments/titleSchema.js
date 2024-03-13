import mongoose from 'mongoose'

export const titleSchema = new mongoose.Schema({
    title: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['german', 'korean', 'chinese', 'english'],
    },
})
