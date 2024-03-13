import mongoose from 'mongoose'

export const priceSchema = new mongoose.Schema({
    Price: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const regex = /^\d+,\d{2}€$/
                if (regex.test(v)) {
                    return v
                } else {
                    console.log(
                        'the value has not the correct format',
                        'Expected Format: NN.NN€'
                    )
                }
            },
        },
    },
})
