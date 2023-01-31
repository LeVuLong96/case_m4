import {Request, Response} from "express";
import UserService from "../service/UserService";
import productService from "../service/ProductService";
import userService from "../service/UserService";

class UserController {
    private userService;
    constructor() {
        this.userService = UserService
    }

    showFormLogin = async (req: Request, res: Response) => {
        await this.userService.getAll();
        res.render('user/login' )
    }

    login = async (req: Request, res: Response) => {
        let user = await this.userService.checkUser(req.body);

        if(user) {
            if (user.role === 'admin') {
                // @ts-ignore
                req.session.User = user;

                res.redirect(301, '/users/admin');
            } else {
                // @ts-ignore
                req.session.User = user;
                res.redirect(301, '/users/homeUser');
            }
        } else {
            res.redirect(301, '/users/login');
        }
    }

    showHomeUser = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        // @ts-ignore
        let id = req.session.User.idUser
        let user = await userService.findById(id);

        res.render('homeUser', {products: products, User: user});
    }

    showHomeAdmin = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        res.render('admin/read', {products: products})
    }

    showFormRegister = async (req: Request, res: Response) => {
        res.render('user/register' );
    }

    register = async (req: Request, res: Response) => {
        let user = req.body;
        await UserService.saveUser(user);
        res.redirect(301, '/users/login');
    }

    logout = async (req: Request, res: Response) => {
        if (!req.session) {
            req.session.destroy(() => {
                res.redirect('/users/login');
            });
        }
        else {
            res.redirect('/users/login');
        }
    }



    showOrder = async (req: Request, res: Response) => {
        res.render('user/order' );
    }
    //
    // async addCart(req, res) {
    //     try {
    //         let cart = await Cart.findOne({ user: req.cookies.idUser });
    //         if (!cart) {
    //             const newCart = new Cart({
    //                 items: [],
    //                 user: req.cookies.idUser,
    //             });
    //             await newCart.save();
    //             cart = newCart;
    //         }
    //         let newItem = true;
    //         for (let i = 0; i < cart.items.length; i++) {
    //             if (cart.items[i].product.toString() === req.params.productId) {
    //                 cart.items[i].quantity++;
    //                 newItem = false;
    //                 break;
    //             }
    //         }
    //         if (newItem) {
    //             cart.items.push({
    //                 product: req.params.productId,
    //                 quantity: req.body.quantity,
    //             });
    //         }
    //         await cart.save();
    //         res.redirect(301, "/");
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }
    //
    // async CartTotal(req, res) {
    //     try {
    //         const cart = await Cart.findOne({
    //             user: req.cookies.idUser,
    //         }).populate("items.product");
    //         let total = 0;
    //         let totalProduct = 0;
    //         if (cart) {
    //             for (let i = 0; i < cart.items.length; i++) {
    //                 const item = cart.items[i];
    //                 if (item) {
    //                     //@ts-ignore
    //                     const price = item.product.price;
    //                     const quantity = item.quantity;
    //                     totalProduct += item.quantity;
    //                     total += price * quantity;
    //                 }
    //             }
    //             res.json({
    //                 message: "Total!",
    //                 data: total,
    //                 totalProduct: totalProduct,
    //             });
    //         }
    //     } catch (error) {
    //         console.log(error.message);
    //     }
    // }
    //
    // async Carts(req, res) {
    //     const cart = await Cart.findOne({ user: req.cookies.idUser }).populate(
    //         "items.product"
    //     );
    //     let login = req.cookies.login;
    //     const idUser = req.cookies.idUser;
    //     let total = 0;
    //     for (let i = 0; i < cart.items.length; i++) {
    //         const item = cart.items[i];
    //         //@ts-ignore
    //         const price = item.product.price;
    //         const quantity = item.quantity;
    //         total += price * quantity;
    //     }
    //     if (cart.items.length === 0) {
    //         res.render("user/cart-empty", {
    //             login: login,
    //             idUser: idUser,
    //         });
    //     } else {
    //         res.render("user/cart", {
    //             login: login,
    //             idUser: idUser,
    //             cart: cart.items,
    //             total: total,
    //             idCart: cart._id.valueOf(),
    //         });
    //     }
    // }
    //
    // async deleteCart(req, res) {
    //     try {
    //         const cart = await Cart.findOne({ user: req.cookies.idUser });
    //         cart.items = cart.items.filter((item) => {
    //             return item.product.toString() !== req.params.productId;
    //         });
    //         await cart.save();
    //         res.redirect(301, "/user/cart");
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }
    //
    // async saveCart(req, res) {
    //     try {
    //         let arr = Object.values(req.body);
    //         const cart = await Cart.findOne({ user: req.cookies.idUser });
    //         for (let i = 0; i < arr.length; i++) {
    //             const item = cart.items.find(
    //                 (item) => item.product.toString() === req.body[i].productId
    //             );
    //             item.quantity = req.body[i].quantity;
    //         }
    //         await cart.save();
    //         res.redirect(301, "/user/cart");
    //     } catch (error) {
    //         res.status(500).send(error);
    //     }
    // }


}

export default new UserController();