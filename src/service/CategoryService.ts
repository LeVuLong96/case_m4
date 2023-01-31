import {Category} from "../model/category";
import {AppDataSource} from "../data-source";


class CategoryService {
    private categoryRepository
    constructor() {
        this.categoryRepository = AppDataSource.getRepository(Category)
    }

    getAll = async () => {
        let sql = `SELECT * FROM category`
        let categories = await this.categoryRepository.find(sql);
        return categories;
    }
}

export default new CategoryService();