"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUser = exports.getUserById = exports.getUsers = exports.createUser = exports.loginUser = void 0;
const User_1 = require("../models/User");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_1 = require("../middlewares/auth");
const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        let user = await User_1.User.findOne({ email });
        if (!user) {
            return res.status(400).send({ error: 'Please try to login with correct credentials1', success: false });
        }
        const passwordCompare = await bcryptjs_1.default.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).send({ success: false, error: 'Please try to login with correct credentials2' });
        }
        const token = await (0, auth_1.sign)(user);
        res.status(200).send({ message: 'user login successfully', success: true, token, data: user });
    }
    catch (error) {
        console.log(error);
    }
};
exports.loginUser = loginUser;
const createUser = async (req, res) => {
    try {
        let { name, phone, email, password, role, referredBy, country, } = req.body;
        let referredByUser = null;
        if (referredBy) {
            referredByUser = await User_1.User.findOne({ referralCode: referredBy });
            if (!referredByUser) {
                return res.status(404).json({ error: 'Invalid referral code.' });
            }
        }
        let newUser = {
            name,
            phone,
            email,
            role,
            referralCode: Math.random().toString(36).substring(2, 8).toUpperCase(),
            referredBy: referredByUser?._id,
            country,
            currency: currencyFinder(country),
            password,
            balance: referredByUser ? 50 : 0
        };
        newUser.password = await bcryptjs_1.default.hash(password, 12);
        let user = new User_1.User(newUser);
        await user.save();
        if (referredByUser) {
            referredByUser.referredUsers.push(user._id);
            referredByUser.balance += 100;
            await referredByUser.save();
        }
        res.status(201).send({ message: 'user created', success: true, user });
    }
    catch (error) {
        if (error.code === 11000 && error.keyPattern.email === 1) {
            return res.status(400).send({ success: false, error: 'Please enter a unique email' });
        }
        console.log(error);
        res.status(401).send({ success: false, error });
    }
};
exports.createUser = createUser;
function currencyFinder(country) {
    let countryCurrency = {
        "United States": "$",
        "European Union": "€",
        "United Kingdom": "£",
        "Japan": "¥",
        "Switzerland": "CHF",
        "Australia": "AU$",
        "Canada": "CA$",
        "China": "¥",
        "India": "₹",
        "Russia": "₽",
        "South Korea": "₩",
        "Brazil": "R$",
        "Mexico": "Mex$",
        "South Africa": "R",
        "Saudi Arabia": "﷼",
        "United Arab Emirates": "د.إ",
        "Israel": "₪",
        "Turkey": "₺",
        "Sweden": "kr",
        "Norway": "kr",
        "New Zealand": "NZ$",
        "Singapore": "S$",
        "Hong Kong": "HK$",
        "Malaysia": "RM",
        "Indonesia": "Rp",
        "Egypt": "E£",
        "Nigeria": "₦",
        "Kenya": "KSh",
        "Argentina": "$",
        "Chile": "CL$",
        "Colombia": "COL$",
        "Peru": "S/",
        "Venezuela": "Bs",
        "Ghana": "GH₵"
    };
    return countryCurrency[country] || "Currency not found for the given country.";
}
const getUsers = async (req, res) => {
    try {
        const users = await User_1.User.find().populate({
            path: "referredUsers",
            select: "name email referralCode country",
        });
        res.status(200).send({ message: 'All Users Data', success: true, users });
    }
    catch (error) {
        console.log(error);
        res.status(401).send({ success: false, error });
    }
};
exports.getUsers = getUsers;
const getUserById = async (req, res) => {
    try {
        const user = await User_1.User.findById(req.params._id).populate({
            path: "referredUsers",
            select: "name email referralCode country",
        });
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.status(200).send({ message: 'All Users Data', success: true, user });
    }
    catch (error) {
        console.log(error);
        res.status(401).send({ success: false, error });
    }
};
exports.getUserById = getUserById;
const updateUser = async (req, res) => {
    try {
        const user = await User_1.User.findByIdAndUpdate(req.params._id, req.body);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
        }
        res.status(200).send({ message: 'User Data Updated', success: true });
    }
    catch (error) {
        console.log(error);
        res.status(401).send({ success: false, error });
    }
};
exports.updateUser = updateUser;
//# sourceMappingURL=userController.js.map