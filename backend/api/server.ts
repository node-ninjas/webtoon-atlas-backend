import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { authorRouter } from './database/routers/authorRouter.js'
import { artistRouter } from './database/routers/artistRouter.js'
import { publisherRouter } from './database/routers/publisherRouter.js'
import { webtoonRouter } from './database/routers/webtoonRouter.js'
import { genreRouter } from './database/routers/genreRouter.js'
import { userRouter } from './users/routers/userRouters.js'

dotenv.config()

const PORT = 3550

const app = express()

app.use(express.json())
app.use(cors())
app.use('/authors', authorRouter)
app.use('/artists', artistRouter)
app.use('/publishers', publisherRouter)
app.use('/webtoons', webtoonRouter)
app.use('/genres', genreRouter)

app.use('/users', userRouter)
app.use('/users/login', userRouter)

const dbURL = process.env.DB_URL

const connectToDb = async () => {
    try {
        await mongoose.connect(dbURL || '')
        console.log(`Conntected to mongoDB`)
    } catch (e: any) {
        console.error(e)
        console.log(`Connection to mongoDB failed`)
    }
}

const startServer = async () => {
    try {
        await connectToDb()
        app.listen(PORT, () => {
            console.log(`Conntected to server on: ${PORT}`)
        })
    } catch (e: any) {
        console.log(`Connection to server on port ${PORT} failed`)
        throw new Error(e.message)
    }
}

startServer()
