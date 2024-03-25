import { Request, Response } from 'express'
import { User } from '../schemas/userSchema.ts'
import {
    handleError,
    handleGetAllResponse,
    handleResponse,
} from '../../../utils/handler.ts'

import jwt from 'jsonwebtoken'
import * as tools from "../../../utils/tools.ts"

export const addSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.create(req.body)
        handleResponse(res, req, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const getSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params.id)
        user
            ? res.status(200).json(user)
            : res.status(404).json({ msg: `user ${req.params.id} not found` })
    } catch (e) {
        handleError(res, e)
    }
}

export const getAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await User.find()
        res.status(200).json(user)
    } catch (e) {
        handleError(res, e)
    }
}

export const updateSingleUser = async (req: Request, res: Response) => {
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

export const deleteSingleUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        handleResponse(res, req, user)
    } catch (e) {
        handleError(res, e)
    }
}

export const deleteAllUsers = async (req: Request, res: Response) => {
    try {
        const user = await User.deleteMany()
        res.status(201).json(user)
    } catch (e) {
        handleError(res, e)
    }
}

export const loginUser = async (req: Request, res: Response) => {
    try {
        const { userName, hash } = req.body
        const user = await User.findOne({ userName, hash })
        if (!user) {
            return res.status(401).json({ error: 'Invalid login cred' })
        }
        const token = jwt.sign({ _id: user._id }, 'secretKey', {
            expiresIn: '10s',
        })
        res.status(200).json({ token })
    } catch (e) {
        handleError(res, e)
    }
}

export const currentUser = async (_req: Request, res: Response) => {
    try {
       const _anonymousUser = await User.findOne({userName: "anonymousUser"})
       const anonymousUser = tools.getCurrentUserFromUser(_anonymousUser)
       if (!anonymousUser){
              return res.status(401).json({error: 'Invalid user'})
       }
       const token = jwt.sign({ _id: anonymousUser.accessGroups }, 'secretKey')
       res.status(200).json({token})
    } catch (e) {
        handleError(res, e)
    }
}
