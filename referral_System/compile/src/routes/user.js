"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controllers/userController");
const auth_1 = require("../middlewares/auth");
const router = express_1.default.Router();
router.get('/getAll', auth_1.jwtauthenticator, userController_1.getUsers);
router.get('/get/:_id', userController_1.getUserById);
router.patch('/update/:_id', auth_1.jwtauthenticator, userController_1.updateUser);
router.post('/create', userController_1.createUser);
router.post('/login', userController_1.loginUser);
exports.default = router;
//# sourceMappingURL=user.js.map