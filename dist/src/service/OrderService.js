"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Order_1 = require("../model/Order");
const data_source_1 = require("../data-source");
class UserService {
    constructor() {
        this.getAll = async () => {
            let sql = `select * from order o
                        join product p on o.idProdunt = p.idProduct
                        `;
            let user = await this.orderRepository.query(sql);
            return user;
        };
        this.orderRepository = data_source_1.AppDataSource.getRepository(Order_1.Order);
    }
}
//# sourceMappingURL=OrderService.js.map