import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema(

    {
        userName: { type: String, required: true },
        email: { type: String, required: true},
        hash: { type: String, required: true },
        type: {
            type: [String],
            required: true,
            enum: ['user', 'admin', 'webtoonDatabase'],
        },
        age: { type: Number},
    },
    {
        collection: 'users',
        timestamps: true,
    }
)

export const User = mongoose.model('User', userSchema)
