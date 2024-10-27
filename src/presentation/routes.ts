import { Router } from 'express';
import { Authroutes } from './auth/routes';
import { CategoryRoutes } from './category/routes';
import { ProductRoutes } from './product/routes';
import { UsuarioRoutes } from './usuarios-data/routes';
import cors from 'cors';



export class AppRoutes {


  static get routes(): Router {

    const router = Router();
    
    // Definir las rutas
    // router.use('/api/todos', /*TodoRoutes.routes */ );
    
    router.use(cors());
    router.use('/api/auth', Authroutes.routes);
    router.use('/api/category',CategoryRoutes.routes)
    router.use('/api/product',ProductRoutes.routes)

    router.use('/api/usuarios',UsuarioRoutes.routes );
   

    return router;
  }


}

