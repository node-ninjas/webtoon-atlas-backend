import mongoose from 'mongoose'

const dimensionSchema = {
    type: String,
    required: true,
    validate: {
        validator: function (v: any) {
            const statusTypes = [
                'finished',
                'running',
                'onHiatus',
                'aborted',
                'announced',
            ]
            return statusTypes.includes(v)
        },
        message: (props: any) => `${props.value} is not a valid status!`,
    },
}

export const statusSchema = new mongoose.Schema({
    abroadStatus: dimensionSchema,
    originalStatus: dimensionSchema,
})
