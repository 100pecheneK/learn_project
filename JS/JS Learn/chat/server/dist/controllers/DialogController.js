"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class DialogController {
    constructor(io) {
        this.index = async (req, res) => {
            const authorId = await models_1.UserModel.findOne({ email: req.user.data.email });
            if (!authorId) {
                return res.status(404).json({ message: 'Not found' });
            }
            const dialogs = await models_1.DialogModel
                .find({ author: authorId.id })
                .populate('author partner');
            res.json(dialogs);
        };
        this.create = async (req, res) => {
            try {
                const postData = {
                    author: req.body.author,
                    partner: req.body.partner
                };
                const dialog = new models_1.DialogModel(postData);
                await dialog.save();
                const message = new models_1.MessageModel({
                    text: req.body.text,
                    dialog: dialog.id,
                    user: req.body.author
                });
                await message.save();
                res.json(dialog);
            }
            catch (e) {
                res.status(500).send(e);
            }
        };
        this.delete = async (req, res) => {
            await models_1.DialogModel.findOneAndRemove({ _id: req.params.id });
            res.json({ message: 'Dialog deleted' });
        };
        this.io = io;
    }
}
exports.default = DialogController;
