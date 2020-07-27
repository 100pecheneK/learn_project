"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./core/db");
const http_1 = require("http");
const routes_1 = __importDefault(require("./core/routes"));
const socket_1 = __importDefault(require("./core/socket"));
// setup
dotenv_1.default.config();
const app = express_1.default();
const http = http_1.createServer(app);
const io = socket_1.default(http);
// middleware and routes
routes_1.default(app, io);
// start SERVER
http.listen(process.env.PORT, function () {
    console.log(`Server on: http://localhost:${process.env.PORT}`);
});
