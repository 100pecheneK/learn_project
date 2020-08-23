"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
exports.default = (req, res, next) => {
    if (req.path === '/user/login' || req.path === '/user/registration') {
        return next();
    }
    const token = req.headers.token;
    utils_1.verifyJWTToken(token)
        .then((user) => {
        req.user = user;
        next();
    })
        .catch(() => {
        return res.status(403).json({ message: 'Forbidden' });
    });
};
