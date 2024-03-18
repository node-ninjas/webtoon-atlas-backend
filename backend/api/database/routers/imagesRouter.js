import express from 'express'
import { fetchDataAndSaveToMongoDB } from '../controllers/imagesController.js'

export const imagesRouter = express.Router()

imagesRouter.route('/').get(fetchDataAndSaveToMongoDB)
