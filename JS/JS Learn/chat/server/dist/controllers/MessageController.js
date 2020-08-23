"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("../models");
class MessageController {
    constructor(io) {
        this.index = async (req, res) => {
            const messages = await models_1.MessageModel
                .find({ dialog: req.params.dialogId })
                .populate('dialog');
            res.json(messages);
        };
        this.create = async (req, res) => {
            try {
                const postData = {
                    text: req.body.text,
                    dialog: req.body.dialog,
                    user: req.user.user._id
                };
                const message = new models_1.MessageModel(postData);
                await message.save();
                const msg = await models_1.MessageModel.findById(message.id).populate('dialog');
                const dialog = await models_1.DialogModel.findById(postData.dialog);
                if (!dialog) {
                    return res.status(404).json({ message: 'Not found' });
                }
                this.io.emit('SERVER:NEW_MESSAGE', msg);
                res.json(msg);
            }
            catch (e) {
                res.status(500).send(e);
            }
        };
        this.delete = async (req, res) => {
            await models_1.MessageModel.findOneAndRemove({ _id: req.params.id });
            res.json({ message: 'Message deleted' });
        };
        this.io = io;
    }
}
exports.default = MessageController;
