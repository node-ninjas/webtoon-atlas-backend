import { Request, Response } from 'express'

export const handleError = (res: Response, e: any) => {
    return res.status(500).json(e.message)
}

export const handleResponse = (res: Response, req: Request, model: any[]) => {
    if (model) {
        return res.status(200).json(model)
    } else {
        return res
            .status(404)
            .json({ message: `${req.params.id} could not be found` })
    }
}

export const handleGetAllResponse = (res: Response, model: any[]) => {
    if (model.length === 0) {
        return res.status(404).json({
            message: '404: NOT FOUND',
        })
    } else {
        return res.status(200).json(model)
    }
}
