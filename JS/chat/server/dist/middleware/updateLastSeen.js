"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
async function default_1(req, res, next) {
    await models_1.UserModel.findOneAndUpdate({ _id: '5f1c140d4b74740969526c07' }, { last_seen: new Date() });
    next();
}
exports.default = default_1;
