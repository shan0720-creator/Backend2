import express from "express";
import {  getMyProfile, login, register,logout } from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/auth.js";

const router = express.Router();




router.post("/new", register )

router.post("/login", login )


router.get("/logout", logout )


// Keep the dynamic routes below and static routes above
router.get("/me",isAuthenticated,getMyProfile)









// similarly: - router.put("/userid/:id",updateUser)
// router.delete("/userid/:id",updateUser)
export default router;