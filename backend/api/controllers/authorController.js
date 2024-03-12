import express from 'express'
import { Author } from './../schemas/authorSchema.js'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../utils/handler.js'

export const getSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        handleResponse(res, req, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllAuthors = async (req, res) => {
    try {
        const author = await Author.find()
        handleGetAllResponse(res, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body)
        res.status(201).json(author)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(res, req, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id)
        handleResponse(res, req, author)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteAllAuthors = async (req, res) => {
    try {
        const author = await Author.deleteMany()
        res.status(201).json(author)
    } catch (e) {
        handleError(res, e)
    }
}
