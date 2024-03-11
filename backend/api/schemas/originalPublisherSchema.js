import mongoose from 'mongoose';

import { personInfoSubdocument } from './personInfoSubdocument.js';

export const originalPublisherSchema = new mongoose.Schema({
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
    collection: 'originalPublisher',
    timestamps: true
})

export const OriginalPublisher = mongoose.model('originalPublisher', originalPublisherSchema);
