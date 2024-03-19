import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        // email: { type: String, required: true },
        hash: { type: String, required: true },
        type: {
            type: [String],
            required: true,
            enum: ['user', 'admin', 'webtoonDatabase'],
        },
        age: { type: Number },
    },
    {
        collection: 'users',
        timestamps: true,
    }
)

userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('hash')) {
        user.hash = await bcrypt.hash(user.hash, 4)
    }
    next()
})

// userSchema.statics.findOne( async function (userName, hash) {
//     if (!userName){
//         return null;
//     }
//     const isMatch = await bcrypt.compare(hash, userName.hash)
//     if (!isMatch) {
//         return null;
//     }
//     return userName
// })

export const User = mongoose.model('User', userSchema)
