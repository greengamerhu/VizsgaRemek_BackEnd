import { Body, Controller, Post, UnauthorizedException, UseGuards,  Headers, Delete } from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import LoginDto from './login.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
interface TokenHelper {
    token : ""
}

@Controller('auth')
export class AuthController {
    constructor(private dataSource : DataSource,
        private authService : AuthService) {}
    @Post('login')
    async login(@Body() loginData : LoginDto) {
        const userRepo = this.dataSource.getRepository(User)
        const user = await userRepo.findOne({where : {email : loginData.email}});
        if ( user == null) {
            throw new UnauthorizedException(["Hibás email"])
        }
        if(!await bcrypt.compare(loginData.password, user.password)) {
            throw new UnauthorizedException(["Hibás jelszó"])
        }
        return {
            token : await this.authService.generateTokenFor(user)
        }
    }
    
    @UseGuards(AuthGuard('bearer'))
    @Delete('logout')
    async deleteUserToken(@Headers('authorization') authHeader: string) {
        const token = authHeader.split(' ')[1];
        this.authService.logoutUser(token)
    }    
    //cors
    @UseGuards(AuthGuard('bearer'))
    @Post('logout')
    async deleteUserTokenPost(@Headers('authorization') authHeader: string) {
        const token = authHeader.split(' ')[1];
        this.authService.logoutUser(token)
    }    
}
