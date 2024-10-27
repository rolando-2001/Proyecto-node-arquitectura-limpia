import { Request, Response } from 'express';
import { PaginationDto, CreateProductDto, CustomError } from '../../domain';
import { ProductService } from '../service/product.service';



export class ProductController{
    

    constructor(
        private readonly productService:ProductService
    ){}


    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.log(` ${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }


    createProduct= (req:Request,res:Response)=>{
      const [error,createProductDto] = CreateProductDto.create({
            ...req.body,
            user:req.body.user.id
      });
     
      if(error) return res.status(400).json({error});


      this.productService.createProduct(createProductDto!)
        .then((product)=>res.status(200).json(product))
        .catch((error)=>this.handleError(error,res));
    
    }


    getProduct= (req:Request,res:Response)=>{
        const { page = 1, limit = 10 } = req.query;
        const [error,categoryPaginationDto]=PaginationDto.create(+page,+limit);

        this.productService.productAll(categoryPaginationDto!)
        .then((product)=>res.status(200).json(product))
        .catch((error)=>this.handleError(error,res));
        
    }



}