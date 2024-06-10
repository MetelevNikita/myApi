"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = __importDefault(require("pg"));
const Pool = new pg_1.default.Pool({
    user: 'postgres',
    password: '123456Zz',
    host: 'localhost',
    port: 5432,
    database: 'postgres',
});
exports.default = Pool;
