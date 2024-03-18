import express from 'express'
import { fetchDataAndSaveToMongoD } from '../controllers/imagesController.js'

export const imagesRouter = express.Router()

imagesRouter.route('/').get(fetchDataAndSaveToMongoD)
