import mongoose from 'mongoose'

export const genresSchema = new mongoose.Schema({
    genres: {
        type: [String],
        required: true,
    },
    type: {
        type: String,
        required: true,
        enum: ['Shonen', 'Shojo', 'Seinen', 'Josei', 'Kodomo', 'Hentai', 'Yaoi', 'Yuri', 'Ecchi', 'Harem', 'Isekai', 'Mecha', 'Slice of Life', 'Drama', 'Romance', 'Comedy', 'Action', 'Adventure', 'Fantasy', 'Horror', 'Mystery', 'Psychological', 'Supernatural', 'Thriller', 'Sci-Fi', 'Historical', 'Sports', 'Music', 'School', 'Military', 'Parody', 'Magic', 'Super Power', 'Space', 'Vampire', 'Zombie', 'Samurai', 'Ninja', 'Police', 'Detective', 'Gore', 'Martial Arts', 'Demons', 'Ghosts', 'Monsters', 'Robots', 'Aliens', 'Time Travel', 'Cyberpunk', 'Post-Apocalyptic', 'Dystopia', 'Tragedy', 'Philosophical', 'Political', 'Religious', 'Urban', 'Rural', 'Family', 'Friendship', 'Love', 'Revenge', 'Betrayal', 'War', 'Death', 'Life', 'Dreams', 'Memories', 'Sacrifice', 'Freedom', 'Justice', 'Equality', 'Peace', 'Happiness', 'Sadness', 'Anger', 'Fear', 'Hate', 'Love', 'Joy', 'Sorrow', 'Pain', 'Pleasure', 'Hope', 'Despair', 'Faith', 'Courage', 'Wisdom', 'Strength', 'Weakness', 'Honor', 'Dishonor', 'Pride', 'Humility', 'Greed', 'Envy', 'Lust', 'Gluttony', 'Sloth', 'Wrath', 'Pride', 'Virtue', 'Vice', 'Good', 'Evil', 'Light', 'Darkness', 'Heaven', 'Hell', 'God', 'Devil', 'Angel', 'Demon', 'Human', 'Animal', 'Plant', 'Mineral', 'Element', 'Matter', 'Energy', 'Space', 'Time', 'Life', 'Death', 'Existence', 'Non-Existence', 'Creation', 'Destruction', 'Change', 'Stasis', 'Order', 'Chaos', 'Balance', 'Imbalance', 'Harmony', 'Dissonance', 'Unity', 'Division', 'Eternity', 'Infinity', 'Fate' , 'Destiny', 'Chance', 'Luck', 'Fortune', 'Misfortune', 'Karma', 'Reincarnation', 'Resurrection', 'Immortality', 'Mortality', 'Youth', 'Age', 'Beauty', 'Ugliness', 'Strength', 'Weakness', 'Intelligence', 'Ignorance', 'Wisdom', 'Folly', 'Talent', 'Skill', 'Gift', 'Curse', 'Blessing', 'Miracle', 'Wonder', 'Mystery', 'Secret', 'Truth', 'Lie', 'Reality', 'Illusion', 'Dream', 'Nightmare', 'Memory', 'History', 'Future', 'Past', 'Present', 'Time', 'Space', 'Dimension', 'Universe', 'Multiverse', 'Cosmos', 'Galaxy', 'Star', 'Planet', 'Moon', 'Sun', 'Earth', 'Heaven', 'Hell', 'Purgatory', 'Limbo', 'Paradise', 'Nirvana', 'Samsara', 'Enlightenment', 'Awakening', 'Ascension', 'Descension', 'Transcendence', 'Immanence', 'Omnipotence', 'Omniscience', 'Omnipresence', 'Omnibenevolence', 'Omnimalevolence'],
    },
})