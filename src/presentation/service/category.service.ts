import { CategoryModel } from "../../data";
import { PaginationDto, CreateCategoryDto, CustomError, UserEntity } from "../../domain";


export class CategoryService {

    constructor() { }

    async createCategory(createCategoryDto: CreateCategoryDto, user: UserEntity) {

        const categoryExits = await CategoryModel.findOne({ name: createCategoryDto.name });
        if (categoryExits) throw CustomError.badRequest('Category already exists');


        try {
            const category = await CategoryModel.create({
                ...createCategoryDto,
                user: user.id
            });

            return {
                id: category.id,
                name: category.name,
                availabele: category.available,

            };

        } catch (error) {
            throw CustomError.internalServer(` ${error}`);
        }

    }

    async categoryAll(categoryPaginationDto: PaginationDto) {
        const { page, limit } = categoryPaginationDto;

        try {






            const [count, categories] = await Promise.all([
                CategoryModel.countDocuments(),
                CategoryModel.find()
                    .skip((page - 1) * limit)
                    .limit(limit)

            ])

            return {
                limit: limit,
                page: page,
                count: count,
                categories: categories.map(category => ({
                    id: category.id,
                    name: category.name,
                    availabele: category.available,
                }))
            }

        } catch (error) {
            throw CustomError.internalServer(` ${error}`);
        }


    }


}