import { Controller, Get, Post, Body, Patch, Param,  UseGuards, Request } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/placeOrder')
  @UseGuards(AuthGuard('bearer'))
  @ApiOperation({ description: 'Rendelés leadása' })
  @ApiParam({
    name : "createMenuDto",
    description : "Lásd a Dto szekciónál, rendelés adatai"
  } )
  @ApiParam({
    name : "req",
    description : "A felhasználót ezzel rendelem hozzá a leadott rendelést"
  } )
  create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    return this.orderService.create(createOrderDto, req.user);
  }

  @Get('/getOrders')
  @UseGuards(AuthGuard('bearer'))
  @ApiOperation({ description: 'Aktív illetve a nem aktív rendelések adja vissza annak a usernek amelyik lekérdezi' })
  @ApiParam({
    name : "req",
    description : "Ahhoz kell hogy beazonsítja a rendeléseket"
  } )
  findAllOrders(@Request() req) {
    return this.orderService.findAllOrdersForUsers(req.user);
  }

  @Get('/getOrdersFor')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ description: 'minden rendelés lekérdezése kivéve a "Kiszállítva" státuszu rendelés, kizárolag admin joggal' })
  findAllForAdmins() {
    return this.orderService.findAllForAdmins();
  }

  @Patch(':id')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ description: 'A rendelés státuszának módosításához, kizárólag admin joggal' })
  @ApiParam({
    name : "id",
    description : "A modosítandó rendelés azonosítója"
  } )
  @ApiParam({
    name : "updateOrderDto",
    description : "A státusz módosításához szükséges adat"
  } )
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

}
