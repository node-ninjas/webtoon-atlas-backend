import express from 'express'
import {
    addSingleArtist,
    getSingleArtist,
    getAllArtists,
    updateSingleArtist,
    deleteSingleArtist,
    deleteAllArtists,
} from '../controllers/artistController.js'

export const artistRouter = express.Router()

artistRouter
    .route('/')
    .get(getAllArtists)
    .post(addSingleArtist)
    .delete(deleteAllArtists)
artistRouter
    .route('/:id')
    .get(getSingleArtist)
    .patch(updateSingleArtist)
    .delete(deleteSingleArtist)
