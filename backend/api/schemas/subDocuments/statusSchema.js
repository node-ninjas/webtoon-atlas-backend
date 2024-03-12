import mongoose from 'mongoose'

export const statusSchema = new mongoose.Schema({
    status: {
        type: [String],
        required: true,
    },
})
