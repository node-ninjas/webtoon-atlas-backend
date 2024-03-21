import { Request as ExpressRequest, Response, NextFunction } from 'express'

export const decodeJwt = (token: string) => {
    const base64Url = token.split('.')[1]
    const base64 = base64Url.replace('-', '+').replace('_', '/')
    const decodedData = JSON.parse(
        Buffer.from(base64, 'base64').toString('binary')
    )
    return decodedData
}

interface Request extends ExpressRequest {
    token?: string
}

export const verifyToken = (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const bearerHeader = req.headers['authorization']
    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    } else {
        res.sendStatus(403)
    }
}
