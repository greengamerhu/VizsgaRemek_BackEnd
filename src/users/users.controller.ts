import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import RegisterUserDto from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport/dist';
import {  Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/roles.guard';


@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  create(@Body() createUserDto: RegisterUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('getall')
  @UseGuards(AuthGuard('bearer'))
  // @Roles(Role.Admin)
  findAll(@Request() req) {
    console.log(req.user.role)
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('/profile')
  findOne(@Request() req) {
    return this.usersService.findOne(req.user);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('/a/acc') 
  getProfile(@Request() req) {
    return this.usersService.getProfile(req)
  }


}
