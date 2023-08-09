"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const connect_1 = __importDefault(require("./db/connect"));
const user_1 = __importDefault(require("./src/routes/user"));
const cors_1 = __importDefault(require("cors"));
const bodyParser = require("body-parser");
const dotenv = require('dotenv').config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 5000;
app.use(express_1.default.json());
app.use(express_1.default.static("./public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.get('/health-check', (req, res) => {
    res.status(200).send('server up and running ');
});
app.use('/api/user', user_1.default);
/* Error handling */
app.use((req, res, next) => {
    const error = new Error("Route Not found");
    res.status(404).send({
        message: error.message,
    });
});
/* DB Connection */
(0, connect_1.default)();
app.listen(PORT, () => {
    console.log(`server is running on ${PORT} port`);
});
//# sourceMappingURL=index.js.map