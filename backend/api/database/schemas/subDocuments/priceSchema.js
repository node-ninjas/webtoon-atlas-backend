import mongoose from 'mongoose'

export const priceSchema = new mongoose.Schema({
    value: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const regex = /^\d+,\d{2}$/
                if (regex.test(v)) {
                    return v
                } else {
                    console.log(
                        'the value has not the correct format',
                        'Expected Format: D+,DD'
                    )
                }
            },
        },
    },
    currency: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                const currencyTypes = ['€', '$', '₩']
                return currencyTypes.includes(v)
            },
        },
    },
})
