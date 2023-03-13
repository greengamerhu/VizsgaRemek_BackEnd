import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserAdressService } from './user_adress.service';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { UpdateUserAdressDto } from './dto/update-user_adress.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('user-adress')
export class UserAdressController {
  constructor(private readonly userAdressService: UserAdressService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post()
  create(@Body() createUserAdressDto: CreateUserAdressDto, @Request() req) {
    return this.userAdressService.create(createUserAdressDto, req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get()
  findAllByUser(@Request() req) {
    return this.userAdressService.findAll(req.user);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAdressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAdressDto: UpdateUserAdressDto) {
    return this.userAdressService.update(+id, updateUserAdressDto);
  }

  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAdressService.remove(+id);
  }
}
