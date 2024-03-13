import express from 'express'
import {
    addSinglePublisher,
    getSinglePublisher,
    getAllPublishers,
    updateSinglePublisher,
    deleteSinglePublisher,
    deleteAllPublishers,
} from '../controllers/publisherController.js'

export const publisherRouter = express.Router()

publisherRouter
    .route('/')
    .get(getAllPublishers)
    .post(addSinglePublisher)
    .delete(deleteAllPublishers)
publisherRouter
    .route('/:id')
    .get(getSinglePublisher)
    .patch(updateSinglePublisher)
    .delete(deleteSinglePublisher)
