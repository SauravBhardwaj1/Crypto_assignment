import dotenv from "dotenv";
import express, { Request, Response, NextFunction } from "express";
import jwt, { VerifyErrors } from "jsonwebtoken";

dotenv.config({ path: ".env" });

const jwtConfig: any = {
  secret: process.env.JWT_SECRET,
  expiry: process.env.TOKEN_EXPIRY_HOUR,
  saltRound: 3,
};

export const sign = async (payload: any) => {
  const expiresIn = jwtConfig.expiry || '1h';
  return jwt.sign({ payload }, jwtConfig.secret, { expiresIn });
};

export const jwtauthenticator = (req: any, res: Response, next: NextFunction) => {
  let token = req.headers.authorization?.split(" ")[1];
      if (token) {
        jwt.verify(
          token,
          jwtConfig.secret as string,
          (err: VerifyErrors | null, decoded: any) => {
            if(req.url.includes("getall") && decoded && decoded.payload.role == "Admin" )  {
              next();
            }
            else if(req.url.includes("update") && decoded && decoded.payload._id == req.params._id )  {
              next();
            }
            else {
              res.status(401).send({ error: "Not authorized", success: false });
            }
          }
        );
      } else {
        res.status(401).send({ error: "Not authorized", success: false });
      }
};
