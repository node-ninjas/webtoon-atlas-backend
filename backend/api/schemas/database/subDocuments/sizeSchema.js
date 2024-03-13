import mongoose from 'mongoose'

const dimensionSchema = {
    type: Number,
    required: true,
    validate: {
        validator: function (v) {
            return v >= 0
        },
        message: (props) =>
            `${props.value} is not a valid dimension! It should be a positive number.`,
    },
}

export const sizeSchema = new mongoose.Schema({
    length: dimensionSchema,
    height: dimensionSchema,
    width: dimensionSchema,
})
