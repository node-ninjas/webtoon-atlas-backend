const isbnSchema = {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: function (v: any) {
            return /^\d{13}$/.test(v)
        },
        message: (props: any) =>
            `${props.value} is not a valid ISBN! It should exactly 13 digits`,
    },
}

export { isbnSchema }
