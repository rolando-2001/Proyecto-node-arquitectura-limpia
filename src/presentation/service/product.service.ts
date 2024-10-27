import { ProductModel } from "../../data";
import { PaginationDto, CreateProductDto, CustomError } from "../../domain";


export class ProductService {

    constructor() { }




    async createProduct(createProductDto: CreateProductDto) {
        const productExist = await ProductModel.findOne({ name: createProductDto.name });
        if (productExist) throw CustomError.badRequest('Product already exists');

        try {
            const product = new ProductModel(createProductDto)
            await product.save();
            return product;
        } catch (error) {
            throw CustomError.internalServer(` ${error}`);

        }
    }

    async productAll(categoryPaginationDto: PaginationDto) {
        const { limit, page } = categoryPaginationDto;

        try {

            const [count,product] = await Promise.all([
                ProductModel.countDocuments(),
                ProductModel.find()
                .skip((page - 1) * limit)
                .limit(limit)
                .populate('user')
                .populate('category')
            ])

            return {
                limit,
                page,
                count: count,
                products:product
            }

        } catch (error) {
            throw CustomError.internalServer(` ${error}`);

        }

    }




}