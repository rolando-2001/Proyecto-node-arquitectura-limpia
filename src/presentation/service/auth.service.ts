import { bcryptAdapter, envs, JwtAdapter } from "../../config";

import { UserModel } from "../../data";
import { CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain";
import { EmailService } from "./email.service";





export class AuthService {

    constructor(
        private readonly EmailService: EmailService
    ) { }

    public async registerUser(registerUserDto: RegisterUserDto) {

        const existUser = await UserModel.findOne({ email: registerUserDto.email });
        if (existUser) throw CustomError.badRequest('Email already exists');

        try {
            const user = new UserModel(registerUserDto);


            /*Encriptar la  contraseña  */
            user.password = bcryptAdapter.hash(registerUserDto.password);


            /* Email validate */

            await this.sendEmailValidationLink(user.email!);

            await user.save();
            /* JWT <----- para mantener la autenticacion del usuario */
            const { password, ...userEntity } = UserEntity.fromObject(user);
            const token = await JwtAdapter.generateToken({ id: user.id });


            return {
                user: userEntity,
                token: token
            };

        } catch (error) {
            throw CustomError.internalServer(` ${error}`);
        }



    }




    public async loginUser(loginUserDto: LoginUserDto) {
        const user = await UserModel.findOne({ email: loginUserDto.email });
        if (!user) throw CustomError.badRequest('User not found');

        const isValidPassword = bcryptAdapter.compare(loginUserDto.password, user.password);

        if (!isValidPassword) throw CustomError.badRequest('Invalid password');

        const { password, ...userInfo } = UserEntity.fromObject(user);

        const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });


        return {
            user: userInfo,
            token: token
        }
    }



    private sendEmailValidationLink = async (email: string) => {

        if (!email) throw CustomError.badRequest('Email is required');

        const token = await JwtAdapter.generateToken({ email });

        if (!token) throw CustomError.internalServer('Error generating token');


        const link = `${envs.WEBSERVICE_URL}/validate-email/${token}`;

        const html = `
        <h1>Validate your email</h1>
        <a href="${link}">${email}</a>
        `;
        const options = {
            to: email,
            subject: 'Validate your email',
            htmlBody: html
        }

        const isEmail = await this.EmailService.sendEmail(options)
        if (!isEmail) throw CustomError.internalServer('Error sending email');

        return true;


    }

    public validateEmail = async (token: string) => {


        const payload = await JwtAdapter.verifyToken(token);
        if (!payload) throw CustomError.badRequest('Invalid token');

        const { email } = payload as { email: string };
        const user = await UserModel.findOne({ email });
        if (!user) throw CustomError.badRequest('User not found');
        user.emailValidate = true;
        await user.save();
        return true;

    }








}