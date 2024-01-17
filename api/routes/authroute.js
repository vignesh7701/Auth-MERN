import express from "express"
import { signup } from "../controller/authcontrol.js"


const router = express.Router();
router.post("/signup", signup);
export default router;