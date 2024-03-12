import mongoose from 'mongoose'

import { Status } from './subDocuments/statusSchema.js'
import { Types } from './subDocuments/typesSchema.js'
import { Demographics } from './subDocuments/demographicsSchema.js'
import { Author } from './authorSchema.js'
import { Artist } from './artistSchema.js'
import { Publisher } from './publisherSchema.js'
import { OriginalPublisher } from './originalPublisherSchema.js'
import { MagazinePublisher } from './magazinePublisherSchema.js'

export const editionSchema = new mongoose.Schema(
    {
        title: { type: String, required: true },
        authors: [{ type: mongoose.Schema.Types.ObjectId, ref: Author }],
        artist: [{ type: mongoose.Schema.Types.ObjectId, ref: Artist }],
        publisher: { type: mongoose.Schema.Types.ObjectId, ref: Publisher },
        status: { type: Status, required: true },
        originalTitle: { type: String },
        originalTranscription: { type: String },
        originalPublisher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: OriginalPublisher,
        },
        magazinePublisher: {
            type: mongoose.Schema.Types.ObjectId,
            ref: MagazinePublisher,
        },
        originalStatus: { type: Status },
        capitels: { type: Number },
        type: { type: Types },
        demographics: { type: Demographics },
    },
    {
        collection: 'edition',
    
        timestamps: true,
    }
)

export const Edition = mongoose.model('Edition', editionSchema)
