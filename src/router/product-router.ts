import {Router} from "express";
import homeController from "../controller/HomeController";

export const productRouter = Router();

productRouter.post('/create' , homeController.create);

productRouter.put('/edit/:id',homeController.updateProduct);

productRouter.delete('/remove/:id',homeController.removeProduct);