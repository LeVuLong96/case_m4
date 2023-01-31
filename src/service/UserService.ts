import {User} from "../model/user";
import {AppDataSource} from "../data-source";


class UserService {
    private userRepository
    constructor() {
        this.userRepository = AppDataSource.getRepository(User)
    }

    getAll = async () => {
        let sql = `select * from user`
        let user = await this.userRepository.query(sql)
        return user;
    }

    checkUser = async (user) => {
        let userCheck = await this.userRepository.findOneBy({username: user.username, password: user.password});
        if (!userCheck) {
            return null
        }
        return userCheck
    }

    saveUser = async (user) => {
        return this.userRepository.save(user);
    }

    findById = async (id) => {
        let user = await this.userRepository.findOneBy({idUser: id});
        return user;
    }


}

export default new UserService();