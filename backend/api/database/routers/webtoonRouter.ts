import express from 'express'
import {
    addSingleWebtoon,
    getSingleWebtoon,
    getAllWebtoons,
    updateSingleWebtoon,
    deleteSingleWebtoon,
    deleteAllWebtoons,
} from '../controllers/webtoonController.ts'

export const webtoonRouter = express.Router()

webtoonRouter
    .route('/')
    .get(getAllWebtoons)
    .post(addSingleWebtoon)
    .delete(deleteAllWebtoons)
webtoonRouter
    .route('/:id')
    .get(getSingleWebtoon)
    .patch(updateSingleWebtoon)
    .delete(deleteSingleWebtoon)
