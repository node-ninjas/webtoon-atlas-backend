import mongoose from 'mongoose'

import { personInfoSubdocument } from './personInfoSubdocument.js'

export const artistSchema = new mongoose.Schema(
    {
        ...personInfoSubdocument.obj,
        edition: [
            {
                edition_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Edition',
                },
            },
        ],
    },
    {
        collection: 'artist',
        timestamps: true,
    }
)

export const Artist = mongoose.model('Artist', artistSchema)
