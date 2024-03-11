import express from 'express'
import {
    addSingleAuthor,
    getSingleAuthor,
    updateSingleAuthor,
    deleteSingleAuthor,
} from '../controllers/authorController.js'

export const authorRouter = express.Router()

authorRouter.route('/').post(addSingleAuthor)
authorRouter
    .route('/:id')
    .get(getSingleAuthor)
    .patch(updateSingleAuthor)
    .delete(deleteSingleAuthor)
