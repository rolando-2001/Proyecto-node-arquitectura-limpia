import { envs } from './config/envs';
import { MongoDatabase } from './data';
import { UsuarioModel } from './data/mongo/models/usuarios';
import { AppRoutes } from './presentation/routes';
import { Server } from './presentation/server';


(async () => {
  main();
})();


async function main() {

  //* mongo connection
  await MongoDatabase.connect({
    dbName: envs.MONGO_BD_NAME,
    mongoUrL: envs.MONGO_URL
  })





  const server = new Server({
    port: envs.PORT,
    routes: AppRoutes.routes,
  });

  
 
  
  
  server.start();

 
}