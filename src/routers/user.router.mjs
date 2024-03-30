import { Router } from "express";
import {
  getAllUserController,
  createUserController,
  getOneUserController,
  updateUserController,
  deleteUserController,
  loginUserController,
} from "../controllers/user.controller.mjs";
import verifyToken from "../middlewares/token.middleware.mjs";

const userRouter = Router();

userRouter.get("/", verifyToken, getAllUserController);
userRouter.post("/", verifyToken, createUserController);
userRouter.get("/:id", verifyToken, getOneUserController);
userRouter.put("/:id", verifyToken, updateUserController);
userRouter.delete("/:id", verifyToken, deleteUserController);
userRouter.post("/login", loginUserController);

export default userRouter;
