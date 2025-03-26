import exprees from "express";
import { protectRoute } from "../middleware/protectRoute.js";
import { getNotifications } from "../controllers/notification.controller.js";
import { deleteNotifications } from "../controllers/notification.controller.js";

const router = exprees.Router();

router.get("/", protectRoute, getNotifications);
router.delete("/", protectRoute, deleteNotifications);

export default router;