import mongoose from 'mongoose'

export const isbnSchema = new mongoose.Schema({
    isbn: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\d{13}$/.test(v)
            },
            message: (props) =>
                `${props.value} is not a valid ISBN! It should exactly 13 digits`,
        },
        unique: true,
    },
})
