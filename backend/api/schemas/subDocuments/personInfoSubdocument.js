import mongoose from 'mongoose'

export const personInfoSubdocument = new mongoose.Schema({
    name: { type: String, required: true },
    city: { type: String, required: true },
    description: { type: String, required: true },
})
