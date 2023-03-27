import { BadRequestException, Injectable } from '@nestjs/common';
import { Menu } from 'src/menu/entities/menu.entity';
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
  async create(createCartDto: CreateCartDto, user : User) {
    const cartRepo = this.dataSource.getRepository(Cart);
    const AlreadyInTheCart = await cartRepo.findOne({where: {user : user, menuItem : createCartDto.menuItem}, relations : {user : true, menuItem : true}});
    if(AlreadyInTheCart) {
      console.log(AlreadyInTheCart.quantity) 
      AlreadyInTheCart.quantity += createCartDto.quantity
      console.log(createCartDto.quantity)
      AlreadyInTheCart.total = AlreadyInTheCart.menuItem.food_price * AlreadyInTheCart.quantity
      cartRepo.save(AlreadyInTheCart)
      return;
    }
    const newCartItem = new Cart()
    newCartItem.menuItem = createCartDto.menuItem
    newCartItem.quantity = createCartDto.quantity 
    newCartItem.total = newCartItem.quantity * newCartItem.menuItem.food_price
    newCartItem.user = user;
    cartRepo.save(newCartItem)

  }

  async getCartItems(user : User) {
    const cartRepo = this.dataSource.getRepository(Cart);
    let sumTotalQuerry  =  await cartRepo.createQueryBuilder('cart').select('SUM(total) as subTotal') 
    .where('userId = :userId', {userId : user.id}).getRawOne() as subTotal
    const sumTotal = sumTotalQuerry.subTotal;
    
    return {shoppingCart : await cartRepo.find({where :{user}, relations : {menuItem : true}}), sumTotal}
  }

  findOne(id: number) {
    return `This action returns a #${id} cart`;
  }

  async update(updateCartDto : UpdateCartDto, user : User) {
    console.log(user)
    const cartRepo = this.dataSource.getRepository(Cart)
    const cartItemToUpdate = await cartRepo.findOne({where: {user : user, menuItem : updateCartDto.menuItem}, relations : {user : true, menuItem : true}})
    cartItemToUpdate.quantity = updateCartDto.quantity
    cartItemToUpdate.total = updateCartDto.quantity * updateCartDto.menuItem.food_price
    console.log(cartItemToUpdate)
    cartRepo.save(cartItemToUpdate)
  }

  async remove(id: string) {
    const cartRepo = this.dataSource.getRepository(Cart)
    console.log(id)
    await cartRepo.delete({id : id});
  }
}
