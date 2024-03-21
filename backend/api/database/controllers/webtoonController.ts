import express from 'express'
import { Webtoon } from '../schemas/webtoonSchema.js'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../../utils/handler.js'

export const getSingleWebtoon = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const webtoon = await Webtoon.findById(req.params.id).populate('genres')
        handleResponse(res, req, webtoon)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const getAllWebtoons = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const webtoon = await Webtoon.find().populate('genres')
        handleGetAllResponse(res, webtoon)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const addSingleWebtoon = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const webtoon = await Webtoon.create(req.body)
        res.status(201).json(webtoon)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const updateSingleWebtoon = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const webtoon = await Webtoon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        handleResponse(res, req, webtoon)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteSingleWebtoon = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const webtoon = await Webtoon.findByIdAndDelete(req.params.id)
        handleResponse(res, req, webtoon)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteAllWebtoons = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const webtoon = await Webtoon.deleteMany()
        res.status(201).json(webtoon)
    } catch (e: any) {
        handleError(res, e)
    }
}
