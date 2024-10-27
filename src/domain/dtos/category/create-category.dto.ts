

export class CreateCategoryDto {

    constructor(
        public readonly name: string,
        public readonly availabele: boolean,

    ) { }


    static create(object: { [key: string]: any }): [string?, CreateCategoryDto?] {

        const { name, availabele = false } = object;
        let newavailabele = availabele;


        if (!name) return ['name is required', undefined];
        if (typeof availabele !== 'boolean') {
            newavailabele = (availabele === 'true');
        }

        return [undefined, new CreateCategoryDto(name, newavailabele)];
    }


}
