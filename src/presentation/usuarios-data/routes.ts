import { Router } from "express";
import { UsuarioController } from "./controller";
import { UsuarioService } from "../service/usuario.service";



export class UsuarioRoutes {


    static get routes(): Router {


        const router = Router();
        const usuarioService=new UsuarioService()
        const controller=new UsuarioController(usuarioService);
        router.get('/',controller.UsuarioAll);
        router.get('/:numero',controller.UsuarioNumero);

        return router;
    }

}