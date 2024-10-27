import { envs } from "../../config"
import { CategoryModel } from "../mongo/models/category.model"
import { ProductModel } from "../mongo/models/product.model"
import { UserModel } from "../mongo/models/user.model"
import { UsuarioModel } from "../mongo/models/usuarios"
import { MongoDatabase } from "../mongo/mongo-database"
import { seedData } from "./data"

(async () => {


    await MongoDatabase.connect({
        dbName: envs.MONGO_BD_NAME,
        mongoUrL: envs.MONGO_URL
    })

    await main()

    await MongoDatabase.disconnect();

})()


async function main() {

    // 0  Borrar todo

    //Crear Usuarios

    await Promise.all([
        UserModel.deleteMany(),
        UsuarioModel.deleteMany(),
        CategoryModel.deleteMany(),
        ProductModel.deleteMany()
    ])

    const user = await UserModel.create(seedData.users);
    const usuarios=await UsuarioModel.insertMany(seedData.usuarios);





}