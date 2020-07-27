"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const socket_io_1 = __importDefault(require("socket.io"));
function default_1(http) {
    const io = socket_io_1.default(http);
    io.on('connection', function (socket) {
    });
    return io;
}
exports.default = default_1;
