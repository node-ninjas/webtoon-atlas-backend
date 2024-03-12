import mongoose from 'mongoose'

export const typesSchema = new mongoose.Schema({
    types: {
        type: String,
        required: true,
    },
})
