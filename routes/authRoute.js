import express from "express";
import {registerController,
    loginController,
    testController,
    forgotPasswordController
} from '../controllers/authContollers.js'

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object
const router = express.Router();

//routing

//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//Forgot Password || POST
router.post("/forgot-password", forgotPasswordController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);//multiple middleware can be added 

//protected User route auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
});

export default router;


