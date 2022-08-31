import express from "express";
import { authorization } from "../middleware/authorization.js";
import contactRouter from "./contact.js";
import userRouter from "./user.js";
const router = express.Router();

router.use("/contact", contactRouter);
router.use("/auth", userRouter);
router.get("/user", authorization);

export default router;
