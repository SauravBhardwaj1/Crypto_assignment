import {Request, Response} from "express";
import {User} from "../models/User";
import bcrypt from 'bcryptjs';
import {sign} from "../middlewares/auth";


export const loginUser = async (req: Request, res: Response) => {
    try{
        const {email, password} = req.body;
        let user = await User.findOne({email});
        if(!user){
            return res.status(400).send({error:'Please try to login with correct credentials1', success: false});
        }
        const passwordCompare =  await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            return res.status(400).send({success:false,error:'Please try to login with correct credentials2'});
        }
        const token: string = await sign(user); 
        res.status(200).send({message:'user login successfully',success:true,token,data:user})
    }catch(error){
        console.log(error);
    }
}

export const createUser = async (req: Request, res: Response) => {
    try {
        let {
            name,
            phone,
            email,
            password,
            role,
            referredBy,
            country,
        }=req.body;

        let referredByUser = null;

        if(referredBy){
            referredByUser = await User.findOne({ referralCode:referredBy });
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
            referredBy:referredByUser?._id,
            country,
            currency:currencyFinder(country),
            password,
            balance:referredByUser? 50:0
        }

        newUser.password = await bcrypt.hash(password, 12);

        let user = new User(newUser);
        await user.save();

        if (referredByUser) {
            referredByUser.referredUsers.push(user._id);
            referredByUser.balance+=100;
            await referredByUser.save();
        }

        res.status(201).send({message:'user created',success:true, user});
    } catch (error:any) {
        if(error.code === 11000 && error.keyPattern.email === 1){
            return res.status(400).send({success:false,error:'Please enter a unique email'});
        }
        console.log(error);
        res.status(401).send({success:false,error});
    }
}

function currencyFinder (country:string):string{
    let countryCurrency: { [key: string]: string } = {
        "United States"	:	"$",
        "European Union"	:	"€",
        "United Kingdom"	:	"£",
        "Japan"	:	"¥",
        "Switzerland"	:	"CHF",
        "Australia"	:	"AU$",
        "Canada"	:	"CA$",
        "China"	:	"¥",
        "India"	:	"₹",
        "Russia"	:	"₽",
        "South Korea"	:	"₩",
        "Brazil"	:	"R$",
        "Mexico"	:	"Mex$",
        "South Africa"	:	"R",
        "Saudi Arabia"	:	"﷼",
        "United Arab Emirates"	:	"د.إ",
        "Israel"	:	"₪",
        "Turkey"	:	"₺",
        "Sweden"	:	"kr",
        "Norway"	:	"kr",
        "New Zealand"	:	"NZ$",
        "Singapore"	:	"S$",
        "Hong Kong"	:	"HK$",
        "Malaysia"	:	"RM",
        "Indonesia"	:	"Rp",
        "Egypt"	:	"E£",
        "Nigeria"	:	"₦",
        "Kenya"	:	"KSh",
        "Argentina"	:	"$",
        "Chile"	:	"CL$",
        "Colombia"	:	"COL$",
        "Peru"	:	"S/",
        "Venezuela"	:	"Bs",
        "Ghana"	:	"GH₵"
      }
    return countryCurrency[country] || "Currency not found for the given country.";
}

export const getUsers = async (req: Request, res: Response) => {
    try {
        const users = await User.find().populate({
            path: "referredUsers",
            select: "name email referralCode country",
          })
        res.status(200).send({message:'All Users Data',success:true, users});
    } catch (error:any) {  
        console.log(error);
        res.status(401).send({success:false,error});
    }
}
export const getUserById = async (req: Request, res: Response) => {
    try {
        const user = await User.findById(req.params._id).populate({
            path: "referredUsers",
            select: "name email referralCode country",
          });
        if (!user) {
            return res.status(404).send({ error: "User not found" });
          }
        res.status(200).send({message:'All Users Data',success:true, user});
    } catch (error:any) {  
        console.log(error);
        res.status(401).send({success:false,error});
    }
}

export const updateUser = async (req: Request, res: Response) => {
    try {
        const user = await User.findByIdAndUpdate(req.params._id, req.body);
        if (!user) {
            return res.status(404).send({ error: "User not found" });
          }
        res.status(200).send({message:'User Data Updated',success:true});
    } catch (error:any) {  
        console.log(error);
        res.status(401).send({success:false,error});
    }
}

