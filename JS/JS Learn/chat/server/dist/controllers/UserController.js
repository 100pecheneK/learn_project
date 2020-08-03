"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
const utils_1 = require("../utils");
class UserController {
    constructor(io) {
        this.show = async (req, res) => {
            const user = await models_1.UserModel.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ message: 'Not found' });
            }
            res.json(user);
        };
        this.getMe = async (req, res) => {
            const user = await models_1.UserModel.find({ email: req.user.data.email });
            if (!user) {
                return res.status(404).json({ message: 'Not found' });
            }
            res.json(user);
        };
        this.login = async (req, res) => {
            try {
                const postData = {
                    email: req.body.email,
                    password: req.body.password
                };
                const user = await models_1.UserModel.findOne({ email: postData.email });
                if (!user) {
                    return res.status(403).json({ message: 'Bad email' });
                }
                if (user.password === postData.password) {
                    const token = utils_1.createJWTToken(user);
                    return res.json({ token });
                }
                return res.status(403).json({ message: 'Bad password' });
            }
            catch (e) {
                return res.status(500).json({ message: 'Server error' });
            }
        };
        this.create = async (req, res) => {
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
                return res.send('User created');
            });
        };
        this.delete = async (req, res) => {
            const user = await models_1.UserModel.findOneAndRemove({ _id: req.params.id });
            if (!user) {
                return res.status(404).json({ message: 'Not found' });
            }
            res.json({ message: `User ${user.fullname} deleted` });
        };
        this.io = io;
    }
}
exports.default = UserController;
