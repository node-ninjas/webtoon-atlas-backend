import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const PORT = 3550

const app = express()

app.use(express.json())
app.use(cors())

const dbURL = process.env.DB_URL

const connectToDb = async () => {
    try {
        await mongoose.connect(dbURL)
        console.log(`Conntected to mongoDB`)
    } catch (e) {
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
    } catch (e) {
        console.log(`Connection to server on port ${PORT} failed`)
        throw new Error(e.message)
    }
}

startServer()
 
// Selman ist toll