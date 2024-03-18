import express from 'express'

export const decodeJwt = (token) => {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    const decodedData = JSON.parse(
        Buffer.from(base64, "base64").toString("binary")
    );
    return decodedData;
};
    
export const verifyToken = (
    req,    res,
    next
) => {
    const bearerHeader = req.headers["authorization"];
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        (req).token = bearerToken;
        next();
    } else {
        res.sendStatus(403);
    }
};