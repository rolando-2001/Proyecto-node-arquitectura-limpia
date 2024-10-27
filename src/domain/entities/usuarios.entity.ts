


export class UsuariosEntity {

    constructor(
        public readonly id: string,
        public readonly numero: string,
        public readonly nombres: string,
        public readonly apellido_paterno: string,
        public readonly apellido_materno: string,
        public readonly nombre_completo: string,
        public readonly departamento: string,
        public readonly provincia: string,
        public readonly distrito: string,
        public readonly direccion: string,
        public readonly direccion_completa: string,
        public readonly ubigeo_reniec: string,
        public readonly ubigeo_sunat: string,
        public readonly ubigeo: string[],

    ) { }

    static fromObject(object: { [key: string]: any }) {
        const {
            id,
            _id,
            numero,
            nombres,
            apellido_paterno,
            apellido_materno,
            nombre_completo,
            departamento,
            provincia,
            distrito,
            direccion,
            direccion_completa,
            ubigeo_reniec,
            ubigeo_sunat,
            ubigeo
        } = object;


        return new UsuariosEntity(
            id || _id,
            numero,
            nombres,
            apellido_paterno,
            apellido_materno,
            nombre_completo,
            departamento,
            provincia,
            distrito,
            direccion,
            direccion_completa,
            ubigeo_reniec,
            ubigeo_sunat,
            ubigeo
        );


    }

}

