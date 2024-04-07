import express from "express";
import protectRoute from "../middleware/protectRoute.js";
import { getUsersForSidebar } from "../controllers/userbarController.js";
const router = express.Router();

router.get("/",protectRoute,getUsersForSidebar);
export default router;