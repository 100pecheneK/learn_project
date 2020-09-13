"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const utils_1 = require("../utils");
class UserController {
    static async show(req, res) {
        const user = await models_1.UserModel.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.json(user);
    }
    static async getMe() {
    }
    static async login(req, res) {
        const postData = {
            email: req.body.login,
            password: req.body.password
        };
        const user = await models_1.UserModel.findOne({ email: postData.email });
        if (!user) {
            return res.status(404).json({ message: 'Bad data' });
        }
        if (user.password === postData.password) {
            const token = utils_1.createJWTToken(postData);
            return res.json({ token });
        }
        return res.status(404).json({ message: 'Bad data' });
    }
    static async create(req, res) {
        const postData = {
            email: req.body.email,
            fullname: req.body.fullname,
            password: req.body.password
        };
        const user = new models_1.UserModel(postData);
        await user.save((err) => {
            if (err) {
                return res.status(500).send(err);
            }
        });
        res.send('User created');
    }
    static async delete(req, res) {
        const user = await models_1.UserModel.findOneAndRemove({ _id: req.params.id });
        if (!user) {
            return res.status(404).json({ message: 'Not found' });
        }
        res.json({ message: `User ${user.fullname} deleted` });
    }
}
exports.default = UserController;
