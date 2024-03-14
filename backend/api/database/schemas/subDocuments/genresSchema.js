import mongoose from 'mongoose'

export const genresSchema = new mongoose.Schema({
    genres: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Shoujo', 'Shounen', 'Josei', 'Seinen', 'Action', 'Adult', 'Adventure', 'Boys Life', 'Boys Love', 'Comedy', 'Doujinshi', 'Drama', 'Ecchi', 'Fantasy', 'Gender Bender', 'Harem', 'Hentai', 'Historiacal', 'Horror', 'Lolicon', 'Martial Arts', 'Mature', 'Mecha', 'Mystery', 'Political', 'Psychological', 'Romance', 'School Life', 'Sci-fi', 'Shotacon', 'Slice of Life', 'Smut', 'Sports', 'Supernatural', 'Thriller', 'Tragedy', 'Yaoi', 'Yuri'],
    },
})