import {Router} from "express";
import { getProfile } from "../controllers/profileController.js";

const profileRouter = Router();

// Endpoint
profileRouter.get('/me', getProfile);


export default profileRouter;