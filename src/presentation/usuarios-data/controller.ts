import { Request, Response } from 'express';
import { UsuarioService } from '../service/usuario.service';
import { CustomError, PaginationDto } from '../../domain';


export class UsuarioController {


    constructor(
        private readonly usuarioService: UsuarioService
    ) {}

    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.log(` ${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }

    UsuarioAll = (req: Request, res: Response) => {
        const { page = 1, limit = 10 } = req.query;
       const [error, usuarioPaginationDto] = PaginationDto.create(+page, +limit);

        this.usuarioService.getUsuarioAll(usuarioPaginationDto!)
            .then((usuario) => res.status(200).json(usuario))
            .catch((error) => this.handleError(error, res));

    }

    UsuarioNumero = (req: Request, res: Response) => {
        const { numero } = req.params;

        this.usuarioService.getUsuarioNumero(numero)
            .then((usuario) => res.status(200).json(usuario))
            .catch((error) => this.handleError(error, res));
    }

     



}