import { Body, Controller, Post, UnauthorizedException } from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import LoginDto from './login.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    constructor(private dataSource : DataSource,
        private authService : AuthService) {}
    @Post('login')
    async login(@Body() loginData : LoginDto) {
        const userRepo = this.dataSource.getRepository(User)
        const user = await userRepo.findOne({where : {email : loginData.email}});
        if ( user == null) {
            throw new UnauthorizedException("Hibás email")
        }
        if(await !bcrypt.compare(loginData.password, user.password)) {
            throw new UnauthorizedException("Hibás jelszo")
            
        }
        return {
            message : await this.authService.generateTokenFor(user)
        }
    }
}
