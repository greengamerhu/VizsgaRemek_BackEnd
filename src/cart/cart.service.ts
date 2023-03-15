import { Injectable } from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import { DataSource } from 'typeorm';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Cart } from './entities/cart.entity';

interface subTotal {
    subTotal : string
}

@Injectable()
export class CartService {
  constructor(private dataSource: DataSource) {}
  create(createCartDto: CreateCartDto, user : User) {
    const cartRepo = this.dataSource.getRepository(Cart);

    const newCartItem = new Cart()

    newCartItem.menuItem = createCartDto.menuitem

    console.log(newCartItem.menuItem) 
    console.log(createCartDto.menuitem) 
    newCartItem.quantity = createCartDto.quantity 
    newCartItem.total = newCartItem.quantity * newCartItem.menuItem.food_price
    newCartItem.user = user;
    cartRepo.save(newCartItem)

    
    
  }

  async getCartItems(user : User) {
    const cartRepo = this.dataSource.getRepository(Cart);
    const cartItems = await cartRepo.findBy({user}) 
    let sumTotalQuerry  =  await cartRepo.createQueryBuilder('cart').select('SUM(total) as subTotal') 
    .where('userId = :userId', {userId : user.id}).getRawOne() as subTotal
    const sumTotal = sumTotalQuerry.subTotal;
    return {shoppingCart : await cartRepo.findBy({user}), sumTotal}
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  update(id: number, updateCartDto: UpdateCartDto) {
    return `This action updates a #${id} cart`;
  }

  remove(id: number) {
    return `This action removes a #${id} cart`;
  }
}
