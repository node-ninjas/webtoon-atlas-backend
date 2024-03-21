import mongoose from 'mongoose'
import { personInfoSubdocument } from './subDocuments/personInfo.ts'

export const publisherSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
        type: {
            type: [String],
            required: true,
            enum: ['publisher', 'originalPublisher', 'magazinPublisher'],
        },
    },
    {
        collection: 'publishers',
        timestamps: true,
    }
)

export const Publisher = mongoose.model('Publisher', publisherSchema)
