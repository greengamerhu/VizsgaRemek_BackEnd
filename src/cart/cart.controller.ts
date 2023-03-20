import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import User from 'src/users/entities/user.entity';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
 
  @UseGuards(AuthGuard('bearer'))
  @Post()
  create(@Body() createCartDto: CreateCartDto, @Request() req) {
    return this.cartService.create(createCartDto, req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get()
  getCartItems(@Request() req) {
    return this.cartService.getCartItems(req.user);
  }
  @Get()
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }

  @UseGuards(AuthGuard('bearer'))
  @Patch()
  update(@Body() updateCartDto: UpdateCartDto, @Request() req) {
    return this.cartService.update(updateCartDto, req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(id);
  }
}
