import express from 'express'
import { Genre } from '../schemas/genreSchema.js'
import {
    handleError,
    handleResponse,
    handleGetAllResponse,
} from '../../../utils/handler.js'

export const getSingleGenre = async (req, res) => {
    try {
        const genre = await Genre.findById(req.params.id)
        handleResponse(res, req, genre)
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllGenres = async (req, res) => {
    try {
        const genre = await Genre.find()
        handleGetAllResponse(res, genre)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleGenre = async (req, res) => {
    try {
        const genre = await Genre.create(req.body)
        res.status(201).json(genre)
    } catch (e) {
        handleError(res, e)
    }
}

export const addMultipleGenres = async (req, res) => {
    try {
        const genre = await Genre.insertMany([req.body])
        handleResponse(res, req, genre)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(res, req, genre)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleGenre = async (req, res) => {
    try {
        const genre = await Genre.findByIdAndDelete(req.params.id)
        handleResponse(res, req, genre)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteAllGenres = async (req, res) => {
    try {
        const genre = await Genre.deleteMany()
        res.status(201).json(genre)
    } catch (e) {
        handleError(res, e)
    }
}
