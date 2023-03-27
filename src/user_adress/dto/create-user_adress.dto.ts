import {  IsNotEmpty,  IsOptional, IsPostalCode, IsString, } from "class-validator"

export class CreateUserAdressDto {
    //TODO:  validációt megírni
    @IsNotEmpty()
    @IsString()
    address : string
    @IsNotEmpty()
    @IsString()
    city : string
    @IsNotEmpty()
    @IsPostalCode('HU',{message : "nem magyarországi irányítószámot adtál meg"})
    postalCode : string
    @IsOptional()
    mobileNumber : string
}
