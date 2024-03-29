import express from 'express'
import { Artist } from '../schemas/artistSchema.ts'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../../utils/handler.ts'

export const getSingleArtist = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const artist = await Artist.findById(req.params.id)
        handleResponse(res, req, artist)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const getAllArtists = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const artist = await Artist.find()
        handleGetAllResponse(res, artist)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const addSingleArtist = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const artist = await Artist.create(req.body)
        res.status(201).json(artist)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const updateSingleArtist = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const artist = await Artist.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(res, req, artist)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteSingleArtist = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const artist = await Artist.findByIdAndDelete(req.params.id)
        handleResponse(res, req, artist)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteAllArtists = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const artist = await Artist.deleteMany()
        res.status(201).json(artist)
    } catch (e: any) {
        handleError(res, e)
    }
}
