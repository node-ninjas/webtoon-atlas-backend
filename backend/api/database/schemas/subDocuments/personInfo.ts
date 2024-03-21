import mongoose from 'mongoose'

export const personInfoSubdocument = new mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    description: String,
})
