import mongoose from 'mongoose'

import { genres } from './subDocuments/genres.js'

const genresSchema = new mongoose.Schema(
    {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return genres.includes(v)
            },
            message: (props) => {
                return `${props.value} is not a valid genre. REASON: ${props.reason}`
            },
        },
    },
    {
        collection: 'genres',
        timestamps: true,
    }
)

const Genre = new mongoose.Model('Genre', genresSchema)

export { genresSchema, Genre }
