import { ApiProperty } from "@nestjs/swagger"
import {  IsNotEmpty,  IsOptional, IsPostalCode, IsString, } from "class-validator"

export class CreateUserAdressDto {
    //TODO:  validációt megírni
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description : "Az utca/út név",
        type : 'string',
        example : "Some street 323",
        required : true,
    })
    address : string
    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description : "A városnév",
        type : 'string',
        example : "Sincity",
        required : true,
    })
    city : string
    @IsNotEmpty()
    @IsPostalCode('HU',{message : "nem magyarországi irányítószámot adtál meg"})
    @ApiProperty({
        description : "Az irányítószám, Magyar irányítószámnak kell lennie",
        type : 'string',
        example : "2234",
        required : true,
    })
    postalCode : string
    @IsOptional()
    @ApiProperty({
        description : "Telefonszám, opciónális",
        type : 'string',
        example : "2234",
        required : false,
    })
    mobileNumber : string
}
