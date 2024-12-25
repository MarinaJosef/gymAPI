"use strict";
require('dotenv').config();

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const clientRouter_1 = __importDefault(require("./routes/clientRouter"));
const app = (0, express_1.default)();
//middlewares
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use('/clients', clientRouter_1.default);
app.listen(3000, () => {
    console.log('Server is running on port 3000 http://localhost:3000');
});
