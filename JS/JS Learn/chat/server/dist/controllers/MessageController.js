"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class MessageController {
    static async index(req, res) {
        const messages = await models_1.MessageModel
            .find({ dialog: req.params.dialogId })
            .populate('dialog');
        res.json(messages);
    }
    static async create(req, res) {
        try {
            const postData = {
                text: req.body.text,
                dialog: req.body.dialog,
                user: req.body.user
            };
            const dialogs = new models_1.MessageModel(postData);
            await dialogs.save();
            res.json(dialogs);
        }
        catch (e) {
            res.status(500).send(e);
        }
    }
    static async delete(req, res) {
        await models_1.MessageModel.findOneAndRemove({ _id: req.params.id });
        res.json({ message: 'Message deleted' });
    }
}
exports.default = MessageController;
