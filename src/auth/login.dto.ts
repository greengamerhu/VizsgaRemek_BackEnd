import { ApiProperty } from "@nestjs/swagger"
import { IsString } from "class-validator"

export default class LoginDto {
    @IsString()
    @ApiProperty()
    email : string
    @IsString()
    @ApiProperty()

    password : string
}