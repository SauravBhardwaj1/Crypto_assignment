const mongoose = require('mongoose');

const connectDB = async(): Promise<void> => {
    try {
        mongoose.set("strictQuery", false);
        const conn = await mongoose.connect(process.env.MONGO_URI!,{
            dbName:"ReferralSystemDB"
        } ,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}

export default connectDB;