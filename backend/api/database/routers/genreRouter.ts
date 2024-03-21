import express from 'express'
import {
    addSingleGenre,
    addMultipleGenres,
    getSingleGenre,
    getAllGenres,
    updateSingleGenre,
    deleteSingleGenre,
    deleteAllGenres,
} from '../controllers/genreController.ts'

export const genreRouter = express.Router()

genreRouter
    .route('/')
    .get(getAllGenres)
    .post(addSingleGenre)
    .post(addMultipleGenres)
    .delete(deleteAllGenres)
genreRouter
    .route('/:id')
    .get(getSingleGenre)
    .patch(updateSingleGenre)
    .delete(deleteSingleGenre)
