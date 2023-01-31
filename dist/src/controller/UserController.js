"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserService_1 = __importDefault(require("../service/UserService"));
const ProductService_1 = __importDefault(require("../service/ProductService"));
const UserService_2 = __importDefault(require("../service/UserService"));
class UserController {
    constructor() {
        this.showFormLogin = async (req, res) => {
            await this.userService.getAll();
            res.render('user/login');
        };
        this.login = async (req, res) => {
            let user = await this.userService.checkUser(req.body);
            if (user) {
                if (user.role === 'admin') {
                    req.session.User = user;
                    res.redirect(301, '/users/admin');
                }
                else {
                    req.session.User = user;
                    res.redirect(301, '/users/homeUser');
                }
            }
            else {
                res.redirect(301, '/users/login');
            }
        };
        this.showHomeUser = async (req, res) => {
            let products = await ProductService_1.default.getAll();
            let id = req.session.User.idUser;
            let user = await UserService_2.default.findById(id);
            res.render('homeUser', { products: products, User: user });
        };
        this.showHomeAdmin = async (req, res) => {
            let products = await ProductService_1.default.getAll();
            res.render('admin/read', { products: products });
        };
        this.showFormRegister = async (req, res) => {
            res.render('user/register');
        };
        this.register = async (req, res) => {
            let user = req.body;
            await UserService_1.default.saveUser(user);
            res.redirect(301, '/users/login');
        };
        this.logout = async (req, res) => {
            if (!req.session) {
                req.session.destroy(() => {
                    res.redirect('/users/login');
                });
            }
            else {
                res.redirect('/users/login');
            }
        };
        this.showOrder = async (req, res) => {
            res.render('user/order');
        };
        this.userService = UserService_1.default;
    }
}
exports.default = new UserController();
//# sourceMappingURL=UserController.js.map