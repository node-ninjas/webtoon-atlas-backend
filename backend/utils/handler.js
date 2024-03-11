export const handleResponse = (req, res) => {
    return req
        ? res.status(200).json(req)
        : res
              .status(404)
              .json({ message: `${req.params.id} could not be found` })
}

export const handleError = (res, e) => {
    return res.status(500).json(e.message)
}
