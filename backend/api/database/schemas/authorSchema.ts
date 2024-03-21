import mongoose from 'mongoose'
import { personInfoSubdocument } from './subDocuments/personInfo.ts'

export const authorSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
    },
    {
        collection: 'authors',
        timestamps: true,
    }
)

export const Author = mongoose.model('Author', authorSchema)
