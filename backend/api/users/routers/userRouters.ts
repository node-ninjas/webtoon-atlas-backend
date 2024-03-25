import express from 'express'
import * as jwttools from '../../../utils/jwttools.ts'
import {
    addSingleUser,
    getSingleUser,
    getAllUsers,
    updateSingleUser,
    deleteSingleUser,
    deleteAllUsers,
    loginUser,
    getCurrentUser,
} from '../controllers/userControllers.ts'

export const userRouter = express.Router()

userRouter
    .route('/')
    .get(getAllUsers)
    .post(addSingleUser)
    .delete(deleteAllUsers)
userRouter.route('/current').get(getCurrentUser)
userRouter
    .route('/:id')
    .get(getSingleUser)
    .patch(updateSingleUser)
    .delete(deleteSingleUser)
userRouter.route('/login').post(loginUser)
