import mongoose from 'mongoose'

const isbnSchema = new mongoose.Schema({
    isbn: {
        type: String,
        validate: {
            validator: function (v) {
                return /^\d{10}$/.test(v)
            },
            message: (props) =>
                `${props.value} is not a valid ISBN! It should exactly 10 digits`,
        },
    },
})

//  ISBN-10  3736322887
//ISBN-13 978-3736322882
