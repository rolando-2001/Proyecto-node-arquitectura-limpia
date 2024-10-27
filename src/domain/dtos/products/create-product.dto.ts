import { validators } from "../../../config";


export class CreateProductDto {


    private constructor(
        public readonly name: string,
        public readonly available: boolean,
        public readonly price: number,
        public readonly description: string,
        public readonly user: string,
        public readonly category: string,
    ) { }


    static create(object: { [key: string]: any }): [string?, CreateProductDto?] {

        const { name, available, price = 0, description, category, user } = object;



        if (!name) return ['Name is required', undefined];
        if (!category) return ['Category is required', undefined];
        if (!validators.isMongoID(user)) return ['Invalidad User Id ', undefined];
        if (!validators.isMongoID(category)) return ['Invalid category', undefined];

        if (isNaN(price)) return ['Price must be a number', undefined];
        

        return [undefined, new CreateProductDto(name, !!available, price, description, user, category)];
    }


}