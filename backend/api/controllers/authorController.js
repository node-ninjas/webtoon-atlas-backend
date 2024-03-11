import { Author } from './../schemas/authorSchema.js'
import { handleError, handleResponse } from '../../utils/handler.js'

export const getSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findById(req.params.id)
        author
        handleResponse(author, res)
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllAuthors = async (req, res) => {
    try {
        const author = await Author.find()
        res.status(201).json(author)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body)
        handleResponse(author, res)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(author, res)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleAuthor = async (req, res) => {
    try {
        const author = await Author.findByIdAndDelete(req.params.id)
        handleResponse(author, res)
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
