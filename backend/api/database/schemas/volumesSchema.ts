import mongoose from 'mongoose'

export const volumesSchema = new mongoose.Schema(
    {
        volumes: {
            type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Webtoon' }],
        },
    },
    {
        collection: 'volumes',
        timestamps: true,
    }
)
