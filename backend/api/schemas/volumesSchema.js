import mongoose from 'mongoose'

export const volumesSchema = new mongoose.Schema(
    {
        title: [
            {
                edition_id: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Edition',
                    required: true,
                },
            },
        ],
        volume: {
            type: Number,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
        pages: {
            type: Number,
        },
        size: {
            type: String,
            required: true,
        },
        isbn: {
            type: String,
            required: true,
        },
        translator: {
            type: String,
        },
        description: {
            type: String,
            required: true,
        },
    },
    {
        collection: 'volumes',
        timestamps: true,
    }
)
