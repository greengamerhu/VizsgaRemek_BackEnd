import { IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator"

export class CreateUserAdressDto {
    //TODO:  validációt megírni
    @IsNotEmpty()
    @IsString()
    adress : string
    @IsNotEmpty()

    city : string
    @IsNotEmpty()
    @Length(4, 4)
    postalCode : string
    @IsOptional()
    mobileNumber : string
}
