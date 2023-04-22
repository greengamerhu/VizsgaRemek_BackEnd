import { Controller, Get, Post, Body, Patch, Param,  UseGuards, Request } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';
import { Role } from 'src/roles/role.enum';
import { Roles } from 'src/roles/roles.decorator';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post('/placeOrder')
  @UseGuards(AuthGuard('bearer'))
  create(@Body() createOrderDto: CreateOrderDto, @Request() req) {
    return this.orderService.create(createOrderDto, req.user);
  }

  @Get('/getOrders')
  @UseGuards(AuthGuard('bearer'))
  findAllOrders(@Request() req) {
    return this.orderService.findAllOrdersForUsers(req.user);
  }

  @Get('/getOrdersFor')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  findAllForAdmins() {
    return this.orderService.findAllForAdmins();
  }

  @Patch(':id')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  update(@Param('id') id: string, @Body() updateOrderDto: UpdateOrderDto) {
    return this.orderService.update(id, updateOrderDto);
  }

}
