import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsStrongPassword } from "class-validator";

export default class RegisterDto {
    @IsEmail()
    email: string;
    
    fullName: string;

    
    password: string;
    @IsNotEmpty()
    repassword : string;
    
    @IsOptional()
    @IsPhoneNumber()
    phoneNumber : string;
}