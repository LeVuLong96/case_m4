import {Request, Response} from "express";
import productService from "../service/ProductService";
import categoryService from "../service/CategoryService";

class HomeController {
    private productService;
    private categoryService;

    constructor() {
        this.productService = productService;
        this.categoryService = categoryService;
    }

    getAll = async (req: Request, res: Response) => {
        let products = await productService.getAll();
        res.status(200).json(products);
    }


    create = async (req: Request, res: Response) => {
        try {
            let products = await productService.save(req.body);
            res.status(200).json(products);
        }
        catch (err) {
            res.status(500).json({
                message: err.message
            });
        }
    }

    updateProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let newProduct = req.body;
            let products = await this.productService.update(id, newProduct);
            res.status(200).json(products);
        } catch (err) {
                res.status(500).json({
                    message: err.message
                });
        }
    }

    removeProduct = async (req: Request, res: Response) => {
        try {
            let id = req.params.id;
            let products = await this.productService.remove(id);
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json({
                message: err.message
            });
        }

    }
}

export default new HomeController();