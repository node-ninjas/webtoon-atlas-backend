import mongoose from 'mongoose'
import { personInfoSubdocument } from './subDocuments/personInfo.ts'
// test comment
export const artistSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
    },
    {
        collection: 'artists',
        timestamps: true,
    }
)

export const Artist = mongoose.model('Artist', artistSchema)
