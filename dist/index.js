"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
//
dotenv_1.default.config();
//
const app = (0, express_1.default)();
// use
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded({ extended: true }));
// router
// listen
const PORT = process.env.PORT || 9000;
const startServer = () => {
    try {
        app.listen(PORT, () => console.log(`Сервер стартовал с порта: ${PORT}`));
    }
    catch (error) {
        console.log(error);
    }
};
startServer();
