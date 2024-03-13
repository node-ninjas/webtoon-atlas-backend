import express from 'express'
import {
    addSingleAuthor,
    getSingleAuthor,
    getAllAuthors,
    updateSingleAuthor,
    deleteSingleAuthor,
    deleteAllAuthors,
} from '../../controllers/database/authorController.js'

export const authorRouter = express.Router()

authorRouter
    .route('/')
    .get(getAllAuthors)
    .post(addSingleAuthor)
    .delete(deleteAllAuthors)
authorRouter
    .route('/:id')
    .get(getSingleAuthor)
    .patch(updateSingleAuthor)
    .delete(deleteSingleAuthor)
