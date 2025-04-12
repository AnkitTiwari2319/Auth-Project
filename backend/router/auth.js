import express from "express";
import Register from "../controller/Register.js";
import Login from "../controller/Login.js";

const router = express.Router();

router.post("/register" , Register);
router.post("/login" , Login);

export default router;