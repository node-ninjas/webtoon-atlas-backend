import express from 'express'
import {
    addSingleUser,
    getSingleUser,
    getAllUsers,
    updateSingleUser,
    deleteSingleUser,
    deleteAllUsers,
} from '../controllers/userControllers.js'

export const userRouter = express.Router()

userRouter.route('/').get(getAllUsers).post(addSingleUser).delete(deleteAllUsers)

userRouter.route('/:id')
    .get(getSingleUser)
    .patch(updateSingleUser)
    .delete(deleteSingleUser)
