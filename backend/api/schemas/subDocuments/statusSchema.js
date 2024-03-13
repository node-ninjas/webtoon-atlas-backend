import mongoose from 'mongoose'

export const statusSchema = new mongoose.Schema({
    status: {
        type: String,
        required: true,
    },
    originalStatus: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['complete', 'running', 'onHiatus', 'aborted', 'announced'],
    },
})
