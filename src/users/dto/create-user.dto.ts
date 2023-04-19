import {  ApiProperty } from "@nestjs/swagger";
import { Contains, IsEmail, IsNotEmpty, IsStrongPassword, } from "class-validator";

export default class RegisterUserDto {
    @IsNotEmpty({message : "Az Email mező nem lehet üres"})
    @IsEmail({}, {message: "ez az email cím nem megfelelő "})
    @ApiProperty({
        description : "A user email cíne",
        type : 'string',
        example : "teszt@example.com", 
        required : true     

    })
    email: string;

    @IsNotEmpty({message: "Az a Név mező nem lehet üres"})
    @Contains(' ', {message: "A név kell tartalmaznia egy szóközt"})
    @ApiProperty({
        description : "A user teljes neve cíne, kell tartalmaznia a szóközt",
        type : 'string',
        example : "Teszt Elek",
        required : true,
    })
    fullName: string;

    @IsNotEmpty({message : "A jelszó mező nem lehet üres"})
    // @IsStrongPassword()
    @ApiProperty({
        description : "A user jelszava",
        type : 'string',
        example : "jelszo123",
        required : true,
    })
    password: string;
    @IsNotEmpty({message : "Az újra-jelszü mező nem lehet üres"})
    @ApiProperty({
        description : "A user jelszava mégegyszer",
        type : 'string',
        example : "jelszo123",
        required : true,
    })
    repassword : string;
    

}
