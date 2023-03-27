import { Injectable } from '@nestjs/common';
import { Cart } from 'src/cart/entities/cart.entity';
import User from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';


@Injectable()
export class OrderService {
  constructor(private dataSource: DataSource) {}
  async create(createOrderDto: CreateOrderDto, user : User) {
    const cartRepo = this.dataSource.getRepository(Cart)
    let order = new Order()

    let cartItems : Cart[] =  await cartRepo.find({ where: { user }, relations: { menuItem: true } })
    cartItems.map(cart => {
      order.menuItem = cart.menuItem
      
    })
    
    
    
    

  }

  findAll() {
    return `This action returns all order`;
  }

  findOne(id: number) {
    return `This action returns a #${id} order`;
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return `This action updates a #${id} order`;
  }

  remove(id: number) {
    return `This action removes a #${id} order`;
  }
}
