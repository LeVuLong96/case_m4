"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const HomeController_1 = __importDefault(require("../controller/HomeController"));
exports.productRouter = (0, express_1.Router)();
exports.productRouter.post('/create', HomeController_1.default.create);
exports.productRouter.put('/edit/:id', HomeController_1.default.updateProduct);
exports.productRouter.delete('/remove/:id', HomeController_1.default.removeProduct);
//# sourceMappingURL=product-router.js.map