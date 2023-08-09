"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require('mongoose');
const connectDB = async () => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "ReferralSystemDB"
        }, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB connected : ${conn.connection.host}`);
    }
    catch (error) {
        console.error(error);
        process.exit(1);
    }
};
exports.default = connectDB;
//# sourceMappingURL=connect.js.map