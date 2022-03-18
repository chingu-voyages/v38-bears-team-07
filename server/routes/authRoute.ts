import express from 'express'
import {login, signup} from "../controllers/authController"

const router = express.Router()

router.get('/login',login)
router.get('/register', signup)

export default router