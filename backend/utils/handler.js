export const handleError = (res, e) => {
    return res.status(500).json(e.message)
}

export const handleResponse = (res, req, modell) => {
    if (modell) {
        return res.status(200).json(modell)
    } else {
        return res
            .status(404)
            .json({ message: `${req.params.id} could not be found` })
    }
}

export const handleGetAllResponse = (res, modell) => {
    if (modell.length === 0) {
        return res.status(404).json({
            message: '404: NOT FOUND',
        })
    } else {
        return res.status(200).json(modell)
    }
}
