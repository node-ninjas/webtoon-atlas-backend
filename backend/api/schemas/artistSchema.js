import mongoose from 'mongoose'

import { personInfoSubdocument } from './personInfoSubdocument.js'

export const artistSchema = new mongoose.Schema(
    {
       ...personInfoSubdocument.obj,
    },
    {
        collection: 'artist',
    }
)

export const Artist = mongoose.model('Artist', artistSchema)
