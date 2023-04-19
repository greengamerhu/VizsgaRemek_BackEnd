import { Controller, Get, Post, Body,  Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UsersService } from './users.service';
import RegisterUserDto from './dto/create-user.dto';
import { AuthGuard } from '@nestjs/passport/dist';
import {  Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';
import { RolesGuard } from 'src/roles/roles.guard';
import { ApiOperation, ApiParam } from '@nestjs/swagger';


@Controller('user')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  @ApiOperation({ description: 'Létrehoz egy új usert' })
  @ApiParam({
    "name" : "createUserDto",
    description : "Lásd a Dto szekciónál"
  })
  create(@Body() createUserDto: RegisterUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get('getall')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ description: 'Kizárólag adminoknak visszadja a usereket' })
  findAll() {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('bearer'))
  @Get('/profile')
  @ApiOperation({ description: 'Visszaadja annak a usernek az adatait, amelyik lekérdezi ezt a végpontot' })
  @ApiParam({
    "name" : "req",
    description : "Lásd a Dto szekciónál"
  })
  findOne(@Request() req) {
    return this.usersService.findOne(req.user);
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
