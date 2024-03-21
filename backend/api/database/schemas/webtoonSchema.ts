import mongoose from 'mongoose'
import { statusSchema } from './subDocuments/statusSchema.ts'
import { authorSchema } from './authorSchema.ts'
import { artistSchema } from './artistSchema.ts'
import { publisherSchema } from './publisherSchema.ts'
import { titleSchema } from './subDocuments/titleSchema.ts'
import { priceSchema } from './subDocuments/priceSchema.ts'
import { sizeSchema } from './subDocuments/sizeSchema.ts'
import { isbnSchema } from './subDocuments/isbnSchema.ts'

const webtoonSchema = new mongoose.Schema(
    {
        titles: [{ ...titleSchema.obj }],
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
        genres: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Genre' }],
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
