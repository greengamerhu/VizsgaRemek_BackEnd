import { IsString } from "class-validator"

export default class LoginDto {
    @IsString()
    email : string
    @IsString()
    password : string
}