import {Order} from "../model/Order";
import {AppDataSource} from "../data-source";


class UserService {
    private orderRepository

    constructor() {
        this.orderRepository = AppDataSource.getRepository(Order)
    }

    getAll = async () => {
        let sql = `select * from order o
                        join product p on o.idProdunt = p.idProduct
                        `
        let user = await this.orderRepository.query(sql)
        return user;
    }


}