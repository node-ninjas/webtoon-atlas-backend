import mongoose from 'mongoose'

export const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        hash: { type: String, required: true },
        type: {
            type: [String],
            required: true,
            enum: ['user', 'admin', 'webtoonDatabase'],
        },
        age: { type: Number, required: true },
    },
    {
        collection: 'users',
        timestamps: true,
    }
)

export const User = mongoose.model('User', userSchema)
