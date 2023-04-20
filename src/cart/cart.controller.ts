import { Controller, Get, Post, Body, Patch, Param, Delete, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import User from 'src/users/entities/user.entity';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}
 
  @UseGuards(AuthGuard('bearer'))
  @Post()
  @ApiOperation({ description: 'Hozzáadja a kosárhoz a user kosarához a menüből a kiválasztott itemet, mellesleg kezeli ha többször nyomnak rá a gombra' })
  @ApiParam({
    name : "createCartDto",
    description : "Lásd a Dto szekciónál"
  } )
  @ApiParam({
    name : "req",
    description : "A req.user-el füzöm hozzá  a kosarat a kosarat"
  } )
  create(@Body() createCartDto: CreateCartDto, @Request() req) {
    return this.cartService.create(createCartDto, req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get()
  @ApiOperation({ description: 'Visszaadja a user kosarát' })
  @ApiParam({
    name : "req",
    description : "Req.user-el keresem ki a userhez tartozo kosarat"
  } )
  getCartItems(@Request() req) {
    return this.cartService.getCartItems(req.user);
  }


  @UseGuards(AuthGuard('bearer'))
  @Patch()
  @ApiOperation({ description: 'ha a  user változtatja a darabszámot akkor ez hívódik meg' })
  @ApiParam({
    name : "updateCartDto",
    description : "Lásd a Dto szekciónál"
  } )
  @ApiParam({
    name : "req",
    description : "Req.user-el keresem ki a userhez tartozo kosarat"
  } )
  update(@Body() updateCartDto: UpdateCartDto, @Request() req) {
    return this.cartService.update(updateCartDto, req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({ description: 'ha a user változtatja a darabszámot és nulla akkor kitörli a kosárból az item-et' })
  @ApiParam({
    name : "id",
    description : "kosár item-nek az id-ja"
  } )
  @ApiParam({
    name : "req",
    description : "Req.user-el keresem ki a userhez tartozo kosarat, ellenörzés miatt"
  } )
  remove(@Param('id') id: string, @Request() req) {
    return this.cartService.remove(id, req.user);
  }
}
