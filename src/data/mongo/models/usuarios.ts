import mongoose from "mongoose";



const usuarioSchema = new mongoose.Schema({
    numero: {
        type: String
    },
    nombres: {
        type: String
    },
    apellido_paterno: {
        type: String
    },
    apellido_materno: {
        type: String
    },
    nombre_completo: {
        type: String
    },
    departamento: {
        type: String
    },
    provincia: {
        type: String,
    },
    distrito: {
        type: String
    },
    direccion: {
        type: String
    },
    direccion_completa: {
        type: String
    },
    ubigeo_reniec: {
        type: String
    },
    ubigeo_sunat: {
        type: String
    },
    ubigeo: {
        type: [String]
    }


});
usuarioSchema.set('toJSON',{
    virtuals:true,
    versionKey:false,
    transform:function(doc, ret, options) {
        delete ret._id;

    },
})

export const UsuarioModel = mongoose.model('Usuario', usuarioSchema);