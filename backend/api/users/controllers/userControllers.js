import express from 'express'
import { User } from '../schema/userSchema.js'
import {
    handleError,
    handleGetAllResponse,
    handleResponse,
} from '../../../utils/handler.js'
import jwt from 'jsonwebtoken'
import * as jwttools from '../../../utils/jwttools.js'
import * as config from '../../../utils/config.js'
import * as tools from '../../../utils/tools.js'

export const addSingleUser = async (req, res) => {
    try {
        const user = await User.create(req.body)
        handleResponse(res, req, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const getSingleUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        user
            ? res.status(200).json(user)
            : res.status(404).json({ msg: `user ${req.params.id} not found` })
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllUsers = async (req, res) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        })
        user
            ? res.status(200).json(user)
            : res.status(404).json({ msg: `user ${req.params.id} not found` })
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteSingleUser = async (req, res) => {
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

export const loginUser = async (req, res) => {
    try {
        const { login } = req.body
        const user = await User.findOne({ login })
        if (user !== null) {
            const seconds = 10
            jwt.sign(
                {
                    user,
                },
                config.sessionSecret(),
                { expiresIn: seconds + 's' },
                (err, token) => {
                    res.json({
                        currentUser: tools.getCurrentUserFromUser(user),
                        token,
                    })
                }
            )
        } else {
            res.status(404).json('bad login')
        }
    } catch (e) {
        handleError(res, e)
    }
}
