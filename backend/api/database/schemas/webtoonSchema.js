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

const webtoonSchema = new mongoose.Schema(
    {
        title: [{ ...titleSchema.obj }],
        authors: [authorSchema],
        artists: [artistSchema],
        publisher: [publisherSchema],
        status: statusSchema,
        chapters: {
            type: Number,
            required: true,
            max: 1000,
        },
        type: {
            type: String,
            required: true,
            enum: ['manhwa', 'manhua', 'webtoon'],
        },
        genres: [genresSchema],
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
        translator: String,
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
        collection: 'webtoons',
        timestamps: true,
    }
)

const Webtoon = mongoose.model('Webtoon', webtoonSchema)

export { webtoonSchema, Webtoon }
