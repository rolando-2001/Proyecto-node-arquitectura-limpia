import { UsuarioModel } from "../../data/mongo/models/usuarios";
import { CustomError, PaginationDto, } from "../../domain";
import { UsuariosEntity } from "../../domain/entities/usuarios.entity";



export class UsuarioService {


    constructor() { }



    async getUsuarioAll(paginationDto: PaginationDto) {

        const { limit, page } = paginationDto;

        try {

            const [count, usuarios] = await Promise.all([
                UsuarioModel.countDocuments(),
                UsuarioModel.find()
                    .skip((page - 1) * limit)
                    .limit(limit)
            ])


            return {
                limit: limit,
                page: page,
                count: count,
                usuarios: usuarios.map(usuario => UsuariosEntity.fromObject(usuario))
            }

        } catch (error) {
            throw CustomError.internalServer(` ${error}`);
        }

    }

    async getUsuarioNumero(numero: string) {
        try {
            const usuario = await UsuarioModel.findOne({ numero: numero });
            if (!usuario) {
                throw CustomError.notFound(`Usuario ${numero} not found`);
            }

            return UsuariosEntity.fromObject(usuario);


        } catch (error) {
            throw CustomError.internalServer(` ${error}`);
        }

    }





}