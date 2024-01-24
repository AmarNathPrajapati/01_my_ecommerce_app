import express from "express";
import {registerController,
    loginController,
    testController
} from '../controllers/authContollers.js'

import { isAdmin, requireSignIn } from "../middleware/authMiddleware.js";
//router object
const router = express.Router();

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.get("/test", requireSignIn, isAdmin, testController);//multiple middleware can be added 

export default router;
