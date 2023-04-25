import { Body, Controller, Post, UnauthorizedException, UseGuards,  Headers, Delete } from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import LoginDto from './login.dto';
import * as bcrypt from 'bcrypt';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiParam } from '@nestjs/swagger';
interface TokenHelper {
    token : ""
}

@Controller('auth')
export class AuthController {
    constructor(private dataSource : DataSource,
        private authService : AuthService) {}
    @Post('login')
    @ApiOperation({ description: 'Bejelentkezés' })
    @ApiParam({
      name : "loginData",
      description : "A bejelentkezéshez szükséges adatok"
    } )
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
    @ApiOperation({ description: 'Kijelentkezés' })
    @ApiParam({
      name : "authHeader",
      description : "A törlésre szánt token"
    } )
    async deleteUserToken(@Headers('authorization') authHeader: string) {
        const token = authHeader.split(' ')[1];
        this.authService.logoutUser(token)
    }    
    
}
