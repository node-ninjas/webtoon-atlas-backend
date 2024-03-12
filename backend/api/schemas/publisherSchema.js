import mongoose from 'mongoose'
import { personInfoSubdocument } from './subDocuments/personInfoSubdocument.js'

export const publisherSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
        type: {
            type: String,
            required: true,
            enum: ['publisher', 'original', 'magazinPublisher'],
        },
    },
    {
        collection: 'publisher',
        timestamps: true,
    }
)

export const Publisher = mongoose.model('Publisher', publisherSchema)
