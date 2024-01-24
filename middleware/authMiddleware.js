import JWT from "jsonwebtoken";
//Middleware means: request jab bhi ham get karenge usake baad next validate hoga then respnse send hoga. and with the help of next we authenticate the valid user. (if will not use the next the execution will stop)
import userModel from "../models/userModel.js";


//Protected Routes token base
export const requireSignIn = async (req, res, next) => {
    try {
      const decode = JWT.verify(
        req.headers.authorization,
        process.env.JWT_SECRET//decoding the token
      );
      req.user = decode;
      next();
    } catch (error) {
      console.log(error);
    }
  };

//admin acceess
export const isAdmin = async (req, res, next) => {
    try {
      const user = await userModel.findById(req.user._id);
      if (user.role !== 1) {
        return res.status(401).send({
          success: false,
          message: "UnAuthorized Access",
        });
      } else {
        next();
      }
    } catch (error) {
      console.log(error);
      res.status(401).send({
        success: false,
        error,
        message: "Error in admin middelware",
      });
    }
  };
  