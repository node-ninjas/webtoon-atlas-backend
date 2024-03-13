import mongoose from 'mongoose'
import { personInfoSubdocument } from './subDocuments/personInfoSubdocument.js'

export const authorSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
    },
    {
        collection: 'authors',
        timestamps: true,
    }
)

export const Author = new mongoose.model('Author', authorSchema)
