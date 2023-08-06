"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = require("mongoose");
const UserSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        enum: ["Admin", "User"],
        default: "User",
    },
    referralCode: { type: String, unique: true },
    referredBy: { type: mongoose_1.Schema.Types.ObjectId, ref: "User", default: null },
    referredUsers: [{ type: mongoose_1.Schema.Types.ObjectId, ref: "User" }],
    country: {
        type: String,
    },
    currency: {
        type: String,
    },
    balance: {
        type: Number,
        default: 0,
    },
}, {
    timestamps: true,
});
exports.User = (0, mongoose_1.model)("User", UserSchema);
//# sourceMappingURL=User.js.map