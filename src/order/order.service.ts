import { BadRequestException, Injectable } from '@nestjs/common';
import e from 'express';
import { Cart } from 'src/cart/entities/cart.entity';
import User from 'src/users/entities/user.entity';
import { DataSource, Not } from 'typeorm';
import { createGzip } from 'zlib';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderItems } from './entities/orderItems.entity';
interface subTotal {
  subTotal : string
}


@Injectable()
export class OrderService {
  constructor(private dataSource: DataSource) {}

  async create(createOrderDto: CreateOrderDto, user : User) {
    const cartRepo = this.dataSource.getRepository(Cart)
    const orderRepo = this.dataSource.getRepository(Order)
    const orderItemRepo = this.dataSource.getRepository(OrderItems)
    let currentOrder = await orderRepo.findOne({where : {status : Not("Kiszállítva"), user : user}, relations :{ user : true}} )
    let cartItems : Cart[]= await cartRepo.find({where :{user}, relations : {menuItem : true}})

    if(cartItems.length == 0 || currentOrder != null)  {
        throw new BadRequestException("vagy üres a kosarad vagy már van felattad rendelésed")
    }
    let order = new Order()
    order.selectedAdress = createOrderDto.selectedAdress
    order.status = "Feldolgozás alatt"
    order.user = user
    order.total = 0
    await orderRepo.save(order)
    console.log("---------------------------------------------------------------------------------")
    
    // console.log(order)
    currentOrder = await orderRepo.findOne({where : {status : Not("Kiszállítva"), user : user}, relations :{ user : true}})
    // console.log(cartItems)
    
    let orderitems : OrderItems[] = []
    cartItems.forEach( element => {
      // console.log(element)
      let orderItem = new OrderItems()
      orderItem.order = order
      orderItem.food_name = element.menuItem.food_name
      orderItem.food_description = element.menuItem.food_description
      orderItem.food_category = element.menuItem.food_category
      orderItem.food_price = element.menuItem.food_price
      orderItem.quantity = element.quantity
      orderItem.total = element.total
      // console.log(element)

      orderitems.push(orderItem)
    });
    await orderItemRepo.insert(orderitems)
    let sumTotalQuerry  =  await orderItemRepo.createQueryBuilder('order_items').select('SUM(total) as subTotal') 
    .where('orderId = :orderId ', {orderId : currentOrder.id}).getRawOne() as subTotal
    currentOrder.total =  parseInt(sumTotalQuerry.subTotal)
    await orderRepo.save(currentOrder)
  }

  findAllOrders(user : User) {
    const orderRepo = this.dataSource.getRepository(Order)
    const orderitems = this.dataSource.getRepository(OrderItems)
    orderRepo.find({where :{user}})
    return ``;
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
