import { ApiProperty } from "@nestjs/swagger"
import { IsEmail, IsString } from "class-validator"

export default class LoginDto {
    @IsString()
    @IsEmail()
    @ApiProperty()
    email : string
    @IsString()
    @ApiProperty()
    password : string
}