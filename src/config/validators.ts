
import mongoose from "mongoose";

export class  validators{


    constructor(){}
    
    static isMongoID(id: string){

        return mongoose.isValidObjectId(id);
    } 

}