import mongoose from 'mongoose';

import { personInfoSubdocument } from './subDocuments/personInfoSubdocument.js';

export const originalPublisherSchema = new mongoose.Schema({
    ...personInfoSubdocument.obj,
},
{
    collection: 'originalPublisher',
    timestamps: true
})

export const OriginalPublisher = mongoose.model('originalPublisher', originalPublisherSchema);
