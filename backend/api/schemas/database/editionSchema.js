import mongoose from 'mongoose'
import { statusSchema } from './subDocuments/statusSchema.js'
import { authorSchema } from './authorSchema.js'
import { artistSchema } from './artistSchema.js'
import { publisherSchema } from './publisherSchema.js'
import { titleSchema } from './subDocuments/titleSchema.js'
import { genresSchema } from './subDocuments/genresSchema.js'

export const editionSchema = new mongoose.Schema(
    {
        title: titleSchema,
        authors: [{ ...authorSchema.obj }],
        artists: [{ ...artistSchema.obj }],
        publisher: { ...publisherSchema.obj },
        status: { type: { ...statusSchema.obj }, required: true },
        chapters: { type: Number, required: true, max: 1000 },
        type: {
            type: String,
            required: true,
            enum: ['manhwa', 'manhua', 'webtoon'],
        },
        genres: { ...genresSchema.obj },
    },
    {
        collection: 'edition',

        timestamps: true,
    }
)

export const Edition = mongoose.model('Edition', editionSchema)
