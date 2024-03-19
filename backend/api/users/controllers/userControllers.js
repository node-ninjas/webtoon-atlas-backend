import express from 'express'
import { User } from '../schema/userSchema.js'
import {
    handleError,
    handleGetAllResponse,
    handleResponse,
} from '../../../utils/handler.js'

import jwt from 'jsonwebtoken';

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
        const { login, passoword } = req.body
        const user = await User.findByCredentials( login , passoword)
        if (!user) {
            return res.status(401).json({error: 'Invalid login cred'})
        }
        const token = jwt.sign({ _id: user._id }, 'secretKey', {expressIn: '1h '})
        res.status(200).json({token})
    } catch (e) {
        handleError(res, e)
    }
}
