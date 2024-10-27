import { Request, Response } from 'express';
import { PaginationDto, CreateCategoryDto, CustomError, UserEntity } from '../../domain';

import { CategoryService } from '../service/category.service';
import { CategoryModel } from '../../data';


export class CategoryController {

    constructor(
        private readonly categoryService: CategoryService
    ) { }


    private handleError = (error: unknown, res: Response) => {

        if (error instanceof CustomError) {
            return res.status(error.statusCode).json({ error: error.message });
        }
        console.log(` ${error}`);
        return res.status(500).json({ error: 'Internal server error' });
    }


    createCategory = (req: Request, res: Response) => {

        const [error, createCategoryDto] = CreateCategoryDto.create(req.body);

        if (error) return res.status(400).json({ error });

        this.categoryService.createCategory(createCategoryDto!, req.body.user)
            .then((category) => res.status(200).json(category))
            .catch((error) => this.handleError(error, res));
    }

    getCategory = (req: Request, res: Response) => {

        const { page = 1, limit = 10 } = req.query;
        const [error, categoryPaginationDto] = PaginationDto.create(+page, +limit);
        if (error) return res.status(400).json({ error });
     





        this.categoryService.categoryAll(categoryPaginationDto!)
            .then(category => res.json(category))
            .catch((error) => this.handleError(error, res));
    }

}