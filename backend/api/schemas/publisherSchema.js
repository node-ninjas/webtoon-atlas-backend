import mongoose from 'mongoose'

import { personInfoSubdocument } from './personInfoSubdocument.js'

export const publisherSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
    },
    {
        collection: 'publisher',
        timestamps: true,
    }
)

export const Publisher = mongoose.model('Publisher', publisherSchema)