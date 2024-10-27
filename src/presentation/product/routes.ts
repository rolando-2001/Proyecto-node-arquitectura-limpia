import { Router } from "express";
import { ProductController } from "./controller";
import { AuthMiddleware } from "../middlewares/auth.middleware";
import { ProductService } from "../service/product.service";


export class ProductRoutes {



    constructor() { }



    static get routes(): Router {

        const router = Router();
      
        const productService = new ProductService();
        const controller = new ProductController(productService);

        router.post('/', [AuthMiddleware.validateJWT],controller.createProduct);

        router.get('/',controller.getProduct);

        return router;
    }
}