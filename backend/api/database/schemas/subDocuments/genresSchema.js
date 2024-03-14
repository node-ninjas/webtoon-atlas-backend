import { genres } from './genres.js'

const genresSchema = {
    type: String,
    required: true,
    validate: {
        validator: function (v) {
            return genres.includes(v)
        },
        message: (props) => {
            'Error: No valid genre', 'Please choose something else, e.g Shounen'
        },
    },
}

export { genresSchema }
