import express from 'express'
import { Author as Publisher } from './../schemas/publisherSchema.js'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../utils/handler.js'

export const getSingleAuthor = async (req, res) => {
    try {
        const publisher = await Publisher.findById(req.params.id)
        handleResponse(res, req, publisher)
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllAuthors = async (req, res) => {
    try {
        const author = await Publisher.find()
        handleGetAllResponse(res, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleAuthor = async (req, res) => {
    try {
        const author = await Publisher.create(req.body)
        res.status(201).json(author)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleAuthor = async (req, res) => {
    try {
        const author = await Publisher.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
            }
        )
        handleResponse(res, req, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleAuthor = async (req, res) => {
    try {
        const author = await Publisher.findByIdAndDelete(req.params.id)
        handleResponse(res, req, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteAllAuthors = async (req, res) => {
    try {
        const author = await Publisher.deleteMany()
        res.status(201).json(author)
    } catch (e) {
        handleError(res, e)
    }
}
