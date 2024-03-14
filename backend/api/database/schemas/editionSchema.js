import mongoose from 'mongoose'
import { statusSchema } from './subDocuments/statusSchema.js'
import { authorSchema } from './authorSchema.js'
import { artistSchema } from './artistSchema.js'
import { publisherSchema } from './publisherSchema.js'
import { titleSchema } from './subDocuments/titleSchema.js'
import { genresSchema } from './subDocuments/genresSchema.js'
import { priceSchema } from './subDocuments/priceSchema.js'
import { sizeSchema } from './subDocuments/sizeSchema.js'
import { isbnSchema } from './subDocuments/isbnSchema.js'

export const editionSchema = new mongoose.Schema(
    {
        title: titleSchema,
        authors: [{ authorSchema }],
        artists: [{ artistSchema }],
        publisher: { publisherSchema },
        status: { type: { ...statusSchema.obj }, required: true },
        chapters: { type: Number, required: true, max: 1000 },
        type: {
            type: String,
            required: true,
            enum: ['manhwa', 'manhua', 'webtoon'],
        },
        genres: { ...genresSchema.obj },
        volume: {
            type: Number,
            required: true,
        },
        price: priceSchema,
        pages: {
            type: Number,
            required: true,
        },
        size: sizeSchema,
        isbn: isbnSchema,
        translator: {
            type: String,
        },
        description: {
            type: String,
            required: true,
            maxLength: 80,
        },
        ageRecommendation: {
            type: Number,
            min: 0,
            max: 20,
        },
    },

    {
        collection: 'edition',
        timestamps: true,
    }
)

export const Edition = mongoose.model('Edition', editionSchema)
