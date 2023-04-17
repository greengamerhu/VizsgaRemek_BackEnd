import { BadRequestException, Injectable } from '@nestjs/common';
import { Cart } from 'src/cart/entities/cart.entity';
import User from 'src/users/entities/user.entity';
import { DataSource, Not } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { OrderItems } from './entities/orderItems.entity';
import { UserAddress } from 'src/user_adress/entities/user_adress.entity';
const moment = require('moment');
interface subTotal {
  subTotal : string
}


@Injectable()
export class OrderService {
  constructor(private dataSource: DataSource) {}

  async create(createOrderDto: CreateOrderDto, user : User) {
    const cartRepo = this.dataSource.getRepository(Cart)
    const addressRepo = this.dataSource.getRepository(UserAddress)
    const orderRepo = this.dataSource.getRepository(Order)
    const orderItemRepo = this.dataSource.getRepository(OrderItems)
    let currentOrder = await orderRepo.findOne({where : {status : Not("Kiszállítva"), user : user}, relations :{ user : true}} )
    let cartItems : Cart[]= await cartRepo.find({where :{user}, relations : {menuItem : true}})
    if(createOrderDto.selectedAddress.id == undefined) {
      throw new BadRequestException("Nem kéne hackelgetni...")
    }
    let userHaveTheAddress = await addressRepo.findOneBy({user : user, 
      id : createOrderDto.selectedAddress.id, 
      address : createOrderDto.selectedAddress.address,
      city : createOrderDto.selectedAddress.city,
      postalCode : createOrderDto.selectedAddress.postalCode})
    if(userHaveTheAddress == null) {
      throw new BadRequestException("A szállítási cím nem megfelő vagy már törölve lett")
    }
    if(cartItems.length == 0 || currentOrder != null)  {
        throw new BadRequestException("vagy üres a kosarad vagy már van felattad rendelésed")
    }
    let order = new Order()
    order.selectedAddress = createOrderDto.selectedAddress
    order.status = "Feldolgozás alatt"
    let date = moment().format('YYYY-MM-DD HH:mm:ss')
    order.orderDate = new Date(date);
    order.user = user
    order.total = 0
    await orderRepo.save(order)
    
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
    await cartRepo.delete({user})
    await orderRepo.save(currentOrder)
  }

  async findAllOrders(user : User) {
    const orderRepo = this.dataSource.getRepository(Order)
    const Activeorder = await orderRepo.find({where :{user, status : Not("Kiszállítva")}, relations : {orderItems : true, selectedAddress : true}});
    const orderHistory = await orderRepo.find({where :{user, status : "Kiszállítva"}, relations : {orderItems : true, selectedAddress : true}});
    return {activeOrder : Activeorder, orderHistory : orderHistory}; 
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
