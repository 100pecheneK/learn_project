"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class DialogController {
    static async index(req, res) {
        const dialogs = await models_1.DialogModel
            .findById({ _id: req.params.id })
            .populate('author partner');
        res.json(dialogs);
    }
    static async create(req, res) {
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
    }
    static async delete(req, res) {
        await models_1.DialogModel.findOneAndRemove({ _id: req.params.id });
        res.json({ message: 'Dialog deleted' });
    }
}
exports.default = DialogController;
