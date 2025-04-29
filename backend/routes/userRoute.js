import express from "express"
import { longinUser,registerUser } from "../controllers/userController.js"

const userRouter=express.Router()
userRouter.post("/register",registerUser)
userRouter.post("/login",longinUser)


export default userRouter;