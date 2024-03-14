import mongoose from 'mongoose'

const dimensionSchema = {
    type: String,
    required: true,
    validate: {
        validator: function (v) {
            const statusTypes = [
                'finished',
                'running',
                'onHiatus',
                'aborted',
                'announced',
            ]
            return statusTypes.includes(v)
        },
        message: (props) =>
            `${
                props.value
            } is not a valid status! It can be one of these ${statusTypes.join(
                ', '
            )} `,
    },
}

export const statusSchema = new mongoose.Schema({
    abroadStatus: dimensionSchema,
    originalStatus: dimensionSchema,
})
