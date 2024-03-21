import express from 'express'
import { Author } from '../schemas/authorSchema.ts'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../../utils/handler.ts'

export const getSingleAuthor = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const author = await Author.findById(req.params.id)
        handleResponse(res, req, author)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const getAllAuthors = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const author = await Author.find()
        handleGetAllResponse(res, author)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const addSingleAuthor = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const author = await Author.create(req.body)
        res.status(201).json(author)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const updateSingleAuthor = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(res, req, author)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteSingleAuthor = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id)
        handleResponse(res, req, author)
    } catch (e: any) {
        handleError(res, e)
    }
}

export const deleteAllAuthors = async (
    req: express.Request,
    res: express.Response
) => {
    try {
        const author = await Author.deleteMany()
        res.status(201).json(author)
    } catch (e: any) {
        handleError(res, e)
    }
}
