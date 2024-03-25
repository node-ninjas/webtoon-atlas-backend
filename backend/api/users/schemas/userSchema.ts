import mongoose from 'mongoose'
import bcrypt from 'bcrypt'

export const userSchema = new mongoose.Schema(
    {
        userName: { type: String, required: true },
        // email: { type: String, required: true },
        password: { type: String, required: true },
        accessGroups: {
            type: [String],
            required: true,
            validate: {
                validator: function (v: string[]) {
                    const accessGroups = [
                        'administrators',
                        'members',
                        'webtoonDatabaseManagers', // Datenbankpfleger
                        'loggedInUsers',
                        'loggedOutUsers',
                    ]
                    return v.every(item => accessGroups.includes(item))
                },
            },
        },
        age: { type: Number },
    },
    {
        collection: 'users',
        timestamps: true,
    }
)

// MIDDLEWARE
userSchema.pre('save', async function (next) {
    const user = this
    if (user.isModified('hash')) {
        user.password = await bcrypt.hash(user.password, 4)
    }
    next()
})

export const User = mongoose.model('User', userSchema)
