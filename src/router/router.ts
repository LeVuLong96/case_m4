import {Router} from "express";
import {productRouter} from "./product-router";
import {userRouter} from "./user-router";
import HomeController from "../controller/HomeController";
import userController from "../controller/UserController";

export const router = Router();
router.get('/', HomeController.getAll);



router.use('/products', productRouter);
router.use('/users', userRouter);
