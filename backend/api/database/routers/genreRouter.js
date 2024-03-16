import express from 'express'
import {
    addSingleGenre,
    getSingleGenre,
    getAllGenres,
    updateSingleGenre,
    deleteSingleGenre,
    deleteAllGenres,
} from '../controllers/genreController.js'

export const genreRouter = express.Router()

genreRouter
    .route('/')
    .get(getAllGenres)
    .post(addSingleGenre)
    .delete(deleteAllGenres)
genreRouter
    .route('/:id')
    .get(getSingleGenre)
    .patch(updateSingleGenre)
    .delete(deleteSingleGenre)
