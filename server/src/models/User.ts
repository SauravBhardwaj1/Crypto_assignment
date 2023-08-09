import { Document, model, Schema, CallbackError } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

interface IUSER extends Document {
    name: string;
    phone: string;
    email: string;
    password: string;
    role: string;
    referralCode: string;
    referredBy: string | null;
    referredUsers: string[];
    country: string;
    currency: string;
    balance: number;
}

const UserSchema: Schema = new Schema(
    {
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
        referredBy: { type: Schema.Types.ObjectId, ref: "User", default: null },
        referredUsers: [{ type: Schema.Types.ObjectId, ref: "User" }],
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
    },
    {
        timestamps: true,
    }
);

export const User = model<IUSER>("User", UserSchema);
