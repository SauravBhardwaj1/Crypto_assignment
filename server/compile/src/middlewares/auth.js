"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtauthenticator = exports.sign = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config({ path: ".env" });
const jwtConfig = {
    secret: process.env.JWT_SECRET,
    expiry: process.env.TOKEN_EXPIRY_HOUR,
    saltRound: 3,
};
const sign = async (payload) => {
    const expiresIn = jwtConfig.expiry || '1h';
    return jsonwebtoken_1.default.sign({ payload }, jwtConfig.secret, { expiresIn });
};
exports.sign = sign;
const jwtauthenticator = (req, res, next) => {
    let token = req.headers.authorization?.split(" ")[1];
    if (token) {
        jsonwebtoken_1.default.verify(token, jwtConfig.secret, (err, decoded) => {
            if (req.url.includes("getall") && decoded && decoded.payload.role == "Admin") {
                next();
            }
            else if (req.url.includes("update") && decoded && decoded.payload._id == req.params._id) {
                next();
            }
            else {
                res.status(401).send({ error: "Not authorized", success: false });
            }
        });
    }
    else {
        res.status(401).send({ error: "Not authorized", success: false });
    }
};
exports.jwtauthenticator = jwtauthenticator;
//# sourceMappingURL=auth.js.map