import express from "express"
import userSignUpController from "../controllers/SignUpController.js"
import userSignInController from "../controllers/SignInController.js"

const router = express.Router()

router.post("/register",userSignUpController)
router.post("/login",userSignInController)

export default router