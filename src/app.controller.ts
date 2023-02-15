import { BadRequestException, Body, Controller, Get, Post, Render } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { AppService } from './app.service';
import Users from './User.entity';
import * as bcrypt from 'bcrypt';
import RegisterDto from './register.dto';
import { Menu } from './Menu.entity';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private dataSource: DataSource,
  ) {}

  @Get('/restaurant/users')
  async getallUsers() {
    const userRepo = this.dataSource.getRepository(Users)
    const users = userRepo.find()
    return users
  } 
  @Get('/restaurant/menu') 
  async getMenu() {
    const menuRepo = this.dataSource.getRepository(Menu)
    return await menuRepo.find() 
  }

  @Post('/restaurant/register')
  async register(@Body() registerDto : RegisterDto ) {
    const userRepo = this.dataSource.getRepository(Users)
    const IsEmailExist = await userRepo.findOne({ where: { email: registerDto.email}})
    if (!registerDto.fullName  || !registerDto.email || !registerDto.password || !registerDto.repassword) {
      throw new BadRequestException('All fields are required')
    }
    if (!(registerDto.password == registerDto.repassword)) {
      throw new BadRequestException('A jelszónak egyezniük kell')
    } 
    if (IsEmailExist) {
      throw new BadRequestException('ez az email cim már be van regisztrálva, jelentkezz be')
    }
    
    const user = new Users()
    user.fullName = registerDto.fullName
    user.email = registerDto.email
    user.password = await bcrypt.hash(registerDto.password, 15)
    user.phoneNumber = registerDto.phoneNumber
    
    userRepo.save(user)

  }  

}
