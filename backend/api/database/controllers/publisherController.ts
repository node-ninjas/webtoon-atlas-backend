import express from 'express'
import { Publisher } from '../schemas/publisherSchema.js'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../../utils/handler.js'

export const getSinglePublisher = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const publisher = await Publisher.findById(req.params.id)
        handleResponse(res, req, publisher)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const getAllPublishers = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const publisher = await Publisher.find()
        handleGetAllResponse(res, publisher)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const addSinglePublisher = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const publisher = await Publisher.create(req.body)
        res.status(201).json(publisher)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const updateSinglePublisher = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const publisher = await Publisher.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        handleResponse(res, req, publisher)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteSinglePublisher = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const publisher = await Publisher.findByIdAndDelete(req.params.id)
        handleResponse(res, req, publisher)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteAllPublishers = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const publisher = await Publisher.deleteMany()
        res.status(201).json(publisher)
    } catch (e: any) {
        handleError(res, e)
    }
}
