import express from 'express'
import {
    addSingleUser,
    getSingleUser,
    getAllUsers,
    updateSingleUser,
    deleteSingleUser,
    deleteAllUsers,
    loginUser,
} from '../controllers/userControllers.ts'

export const userRouter = express.Router()

userRouter
    .route('/')
    .get(getAllUsers)
    .post(addSingleUser)
    .delete(deleteAllUsers)
userRouter.route('/login').post(loginUser)
userRouter
    .route('/:id')
    .get(getSingleUser)
    .patch(updateSingleUser)
    .delete(deleteSingleUser)
