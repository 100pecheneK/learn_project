"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const controllers_1 = require("./controllers");
const middleware_1 = require("./middleware");
// setup
dotenv_1.default.config();
const app = express_1.default();
mongoose_1.default.connect('mongodb://127.0.0.1:27017/chat', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
});
// middleware
app.use(body_parser_1.default.json());
app.use(middleware_1.updateLastSeen);
app.use(middleware_1.checkAuth);
// routes
app.get('/user/:id', controllers_1.UserController.show);
app.post('/user/registration', controllers_1.UserController.create);
app.post('/user/login', controllers_1.UserController.login);
app.delete('/user/delete/:id', controllers_1.UserController.delete);
app.get('/dialogs/:id', controllers_1.DialogController.index);
app.post('/dialogs', controllers_1.DialogController.create);
app.delete('/dialogs/delete/:id', controllers_1.DialogController.delete);
app.get('/messages/:dialogId', controllers_1.MessageController.index);
app.post('/messages', controllers_1.MessageController.create);
app.delete('/messages/delete/:id', controllers_1.MessageController.delete);
// start
app.listen(process.env.PORT, function () {
    console.log(`Server on: http://localhost:${process.env.PORT}`);
});
