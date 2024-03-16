import mongoose from 'mongoose'
import { genres } from './subDocuments/genres.js'

export const genreSchema = new mongoose.Schema(
    {
        type: {
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
    },
    {
        collection: 'genres',
        timestamps: true,
    }
)

export const Genre = mongoose.model('Genre', genreSchema)
