import {Router} from "express";
import userController from "../controller/UserController";
import HomeController from "../controller/HomeController";
import {router} from "./router";


export const userRouter = Router();
userRouter.get('/login', userController.showFormLogin);
userRouter.post('/login', userController.login);
userRouter.get('/register', userController.showFormRegister);
userRouter.post('/register', userController.register);
userRouter.get('/logout', userController.logout);

userRouter.get('/homeUser', userController.showHomeUser);
userRouter.get('/admin', userController.showHomeAdmin)

userRouter.get('/order', userController.showOrder);


// UserRoute.get("/home/cart-total", Cart.CartTotal);
// UserRoute.get("/home/show-cart", Cart.showCart);
// UserRoute.get("/cart", Cart.Carts);
// UserRoute.post("/save-cart/:productId", Cart.saveCart);
// UserRoute.get("/delete-cart/:productId", Cart.deleteCart);
// UserRoute.post("/add/cart/:productId", Token.veryfyAccessToken, Cart.addCart);
//
// UserRoute.get("/check-out", checkOut.showCheckOut);
// UserRoute.post("/check-out", checkOut.checkOut);