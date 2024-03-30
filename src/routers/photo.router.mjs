import { Router } from "express";
import {
  getAllPhotoController,
  createPhotoController,
  getOnePhotoController,
  updatePhotoController,
  deletePhotoController,
} from "../controllers/photo.controller.mjs";
import verifyToken from "../middlewares/token.middleware.mjs";

const photoRouter = Router();

photoRouter.get("/", verifyToken, getAllPhotoController);
photoRouter.post("/", verifyToken, createPhotoController);
photoRouter.get("/:id", verifyToken, getOnePhotoController);
photoRouter.put("/:id", verifyToken, updatePhotoController);
photoRouter.delete("/:id", verifyToken, deletePhotoController);

export default photoRouter;
