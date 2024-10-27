import 'dotenv/config';
import { get } from 'env-var';



export const envs = {

  PORT: get('PORT').required().asPortNumber(),
  MONGO_URL: get('MONGO_URL').required().asString(),
  MONGO_BD_NAME: get('MONGO_BD_NAME').required().asString(),


  /* JWT */
  JWT_SEED: get('JWT_SEED').required().asString(),

  /* Email  */
  MAILER_SERVICE: get('MAILER_SERVICE').required().asString(),
  MAILER_EMAIL: get('MAILER_EMAIL').required().asString(),
  MAILER_SECRET_KEY: get('MAILER_SECRET_KEY').required().asString(),

  /* web */
  WEBSERVICE_URL:get('WEBSERVICE_URL').required().asString(),

}



