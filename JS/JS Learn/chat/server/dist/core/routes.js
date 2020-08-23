"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const controllers_1 = require("../controllers");
const body_parser_1 = __importDefault(require("body-parser"));
const middleware_1 = require("../middleware");
const cors_1 = __importDefault(require("cors"));
exports.default = (app, io) => {
    const userController = new controllers_1.UserController(io);
    const dialogController = new controllers_1.DialogController(io);
    const messageController = new controllers_1.MessageController(io);
    app.use(cors_1.default());
    app.use(body_parser_1.default.json());
    app.use(middleware_1.updateLastSeen);
    app.use(middleware_1.checkAuth);
    app.get('/user/me', userController.getMe);
    app.post('/user/registration', userController.create);
    app.post('/user/login', userController.login);
    app.delete('/user/delete/:id', userController.delete);
    app.get('/user/:id', userController.show);
    app.get('/dialogs', dialogController.index);
    app.post('/dialogs', dialogController.create);
    app.delete('/dialogs/delete/:id', dialogController.delete);
    app.get('/messages/:dialogId', messageController.index);
    app.post('/messages', messageController.create);
    app.delete('/messages/delete/:id', messageController.delete);
};
