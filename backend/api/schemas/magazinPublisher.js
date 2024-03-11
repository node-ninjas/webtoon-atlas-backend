import mongoose from 'mongoose'

import { personInfoSubdocument } from './personInfoSubdocument.js'

export const magazinPublisherSchema = new mongoose.Schema({
    ...personInfoSubdocument.obj,
    edition: [
        {
            edition_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Edition'	
            }
        }
    ]
}, 
{
    collection: 'magazinPublisher',
    timestamps: true
})

export const MagazinPublisher = mongoose.model('MagazinPublisher', magazinPublisherSchema)