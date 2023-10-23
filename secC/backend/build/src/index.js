"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const diaries_1 = __importDefault(require("./routes/diaries"));
const app = (0, express_1.default)();
// To parse the incoming data
app.use(express_1.default.json());
const PORT = 3000;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/diaries', (diaries_1.default));
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// ==== this part was moved to "src" after excercises 9.8-9.9 =====
// import express from 'express';
// const app = express();
// app.use(express.json());
// const PORT = 3000;
// app.get('/ping', (_req, res) => {
//   console.log('someone pinged here');
//   res.send('pong');
// });
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
