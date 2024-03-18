import express from 'express'
import { User } from '../schema/userSchema.js'
import {
    handleError,
    handleGetAllResponse,
    handleResponse,
} from '../../../utils/handler.js'

export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        handleResponse(res, req, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        handleGetAllResponse(res, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const addSingleUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        handleResponse(res, req, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        handleResponse(res, req, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleUser = async (req.res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        handleResponse(res, req, user)
    } catch (e) {
       handleError(res, e)
    }
}

export const deleteAllUsers = async (req, res) => {
    try {
    const user = await User.deleteMany()
    res.status(201).json(user)
    } catch (e) {
       handleError(res, e)
    }
}
