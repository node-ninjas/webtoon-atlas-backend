import { genres } from './genres.js'

const genresSchema = {
    type: String,
    required: true,
    validate: {
        validator: function (v) {
            return genres.includes(v)
        },
        message: (props) => {
            return `${props.value} is not a valid genre. REASON: ${props.reason}`
        },
    },
}

export { genresSchema }
