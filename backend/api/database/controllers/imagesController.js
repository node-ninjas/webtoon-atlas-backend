import { Image } from '../schemas/imagesSchema'
import contentful from 'contentful'

const publicAccessToken = process.env.CF_PUBLISHED_ACCESS_TOKEN

const client = contentful.createClient({
    space: 'fziwjgphbs4j',
    accessToken: publicAccessToken,
})

export const fetchDataAndSaveToMongoDB = async () => {
    try {
        const entries = await client.getEntries()
        entries.items.forEach(async (entry) => {
            const imageURL = entry.fields.image.fields.file.url

            const newData = new MyData({
                title: entry.fields.title,
                body: imageURL,
            })
            await newData.save()
        })
        console.log('Dava saved to MongoDB successfully.')
    } catch (e) {
        console.error('Error fetching dataq from Contentful:', error)
    }
}
