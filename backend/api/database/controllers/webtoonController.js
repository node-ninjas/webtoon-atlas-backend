import express from 'express'
import { Webtoon } from '../schemas/webtoonSchema.js'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../../utils/handler.js'

export const getSingleWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.findById(req.params.id).populate('genres')
        handleResponse(res, req, webtoon)
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllWebtoons = async (req, res) => {
    try {
        const webtoon = await Webtoon.find()
        handleGetAllResponse(res, webtoon)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.create(req.body)
        res.status(201).json(webtoon)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        handleResponse(res, req, webtoon)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleWebtoon = async (req, res) => {
    try {
        const webtoon = await Webtoon.findByIdAndDelete(req.params.id)
        handleResponse(res, req, webtoon)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteAllWebtoons = async (req, res) => {
    try {
        const webtoon = await Webtoon.deleteMany()
        res.status(201).json(webtoon)
    } catch (e) {
        handleError(res, e)
    }
}
