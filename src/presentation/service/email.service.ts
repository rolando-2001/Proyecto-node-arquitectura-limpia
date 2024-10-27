import nodemailer, { Transporter } from 'nodemailer';

import { envs } from '../../config';

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  htmlBody: string;
  attachements?: Attachement[];
}

export interface Attachement {
  filename: string;
  path: string;
}


export class EmailService {

   private transporter:Transporter;

    constructor(
        public mailerService:string,
        public mailerEmail:string,
        public mailerSecretkey:string 
    ) {
         this.transporter = nodemailer.createTransport( {
            service: mailerService,
            auth: {
              user: mailerEmail,
              pass: mailerSecretkey
            }
          });
    }



  


  async sendEmail( options: SendMailOptions ): Promise<boolean> {

    const { to, subject, htmlBody, attachements = [] } = options;


    try {

      const sentInformation = await this.transporter.sendMail( {
        to: to,
        subject: subject,
        html: htmlBody,
        attachments: attachements,
      });

      /* console.log( sentInformation ); */

      return true;
    } catch ( error ) {
      return false;
    }

  }







}