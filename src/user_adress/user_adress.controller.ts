import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserAdressService } from './user_adress.service';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { UpdateUserAdressDto } from './dto/update-user_adress.dto';

@Controller('user-adress')
export class UserAdressController {
  constructor(private readonly userAdressService: UserAdressService) {}

  @Post()
  create(@Body() createUserAdressDto: CreateUserAdressDto) {
    return this.userAdressService.create(createUserAdressDto);
  }

  @Get()
  findAll() {
    return this.userAdressService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userAdressService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserAdressDto: UpdateUserAdressDto) {
    return this.userAdressService.update(+id, updateUserAdressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userAdressService.remove(+id);
  }
}
