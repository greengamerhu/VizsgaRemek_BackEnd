import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingSessionService } from './shopping_session.service';
import { CreateShoppingSessionDto } from './dto/create-shopping_session.dto';
import { UpdateShoppingSessionDto } from './dto/update-shopping_session.dto';

@Controller('shopping-session')
export class ShoppingSessionController {
  constructor(private readonly shoppingSessionService: ShoppingSessionService) {}

  @Post()
  create(@Body() createShoppingSessionDto: CreateShoppingSessionDto) {
    return this.shoppingSessionService.create(createShoppingSessionDto);
  }

  @Get()
  findAll() {
    return this.shoppingSessionService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingSessionService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingSessionDto: UpdateShoppingSessionDto) {
    return this.shoppingSessionService.update(+id, updateShoppingSessionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingSessionService.remove(+id);
  }
}
