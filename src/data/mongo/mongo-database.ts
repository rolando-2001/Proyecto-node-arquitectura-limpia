import mongoose, { mongo } from "mongoose";


interface Options {
    mongoUrL: string,
    dbName: string
}


export class MongoDatabase {

    static async connect(options: Options) {

        const { mongoUrL, dbName } = options;

        try {
            await mongoose.connect(mongoUrL, {
                dbName: dbName,
            })
            return true;
        } catch (error) {
            console.log('Mongo connection error');
            throw error;

        }

    }

    static async disconnect(){
        await mongoose.disconnect()
    }


}