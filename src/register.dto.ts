import { Contains, IsEmail, IsEmpty, IsNotEmpty, IsOptional, IsPhoneNumber, IsStrongPassword, Matches } from "class-validator";
import { isEmpty } from "rxjs";

export default class RegisterDto {
    @IsNotEmpty({message: "Az Email mező nem lehet üres"})
    @IsEmail({}, {message: "ez az email cím nem megfelelő "})
    email: string;
    
    @IsNotEmpty({message: "Az a Név mező nem lehet üres"})
    @Contains(' ', {message: "A név kell tartalmaznia egy szóközt"})
    fullName: string;

    @IsNotEmpty()
    // @IsStrongPassword()
    password: string;
    @IsNotEmpty()
    repassword : string;
    

}