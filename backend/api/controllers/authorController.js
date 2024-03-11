import { Author } from './../schemas/schema.js'
import { handleError, handleResponse } from '../../utils/handler.js'

export const getSingleAuthor = async (req, res) => {
    try {
        const author = Author.findById(req.params.id)
        author
        handleResponse(author, res)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleAuthor = async (req, res) => {
    try {
        const author = Author.create(req.body)
        res.status(201).json(author)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleAuthor = async (req, res) => {
    try {
        const author = Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(author, res)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleAuthor = async (req, res) => {
    try {
        const author = Author.findByIdAndDelete(req.params.id)
        handleResponse(author, res)
    } catch (e) {
        handleError(res, e)
    }
}
