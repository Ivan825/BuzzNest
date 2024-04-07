import express from "express";
import authRoute from "./authRoutes.js";
import userRoute from "./userRoutes.js";
import postRoute from "./postRoutes.js";
import messageRoute from "./messageRoutes.js";
import usersideRoute from "./usrsidebarRoute.js";
const router = express.Router();

router.use(`/auth`, authRoute); //auth/register
router.use(`/users`, userRoute);
router.use(`/posts`, postRoute);
router.use(`/chat/messages`,messageRoute);
router.use(`/chat/users`,usersideRoute);
export default router;
