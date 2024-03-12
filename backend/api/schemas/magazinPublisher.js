import mongoose from 'mongoose'

import { personInfoSubdocument } from './subDocuments/personInfoSubdocument.js'

export const magazinPublisherSchema = new mongoose.Schema({
    ...personInfoSubdocument.obj,
}, 
{
    collection: 'magazinPublisher',
    timestamps: true
})

export const MagazinPublisher = mongoose.model('MagazinPublisher', magazinPublisherSchema)