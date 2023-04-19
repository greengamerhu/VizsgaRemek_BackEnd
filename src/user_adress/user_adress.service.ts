import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, Not } from 'typeorm';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { UserAddress } from './entities/user_adress.entity';
import { Order } from 'src/order/entities/order.entity';
import User from 'src/users/entities/user.entity';

@Injectable()
export class UserAdressService {
  constructor(private dataSource: DataSource) { }
  async create(createUserAdressDto: CreateUserAdressDto, user) {
    //TODO:  validációt megírni
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
    const addresses = await userAdressRepo.findBy({user : user})
    console.log(addresses.length)
    if (addresses.length >=3 ) {
      throw new BadRequestException(["a maximum felvehető címek száma 3"])
    } 
    const newAdress = new UserAddress()
    newAdress.id = 0
    newAdress.postalCode = createUserAdressDto.postalCode
    newAdress.city = createUserAdressDto.city
    newAdress.address = createUserAdressDto.address
    newAdress.mobileNumber = createUserAdressDto.mobileNumber
    newAdress.user = user

    await userAdressRepo.save(newAdress)

  }

  async findAll(user) {
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
    
    return {address: await userAdressRepo.findBy({user : user})}
  }




  async remove(id: number, user: User) {
    const orderRepo = this.dataSource.getRepository(Order)
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
    const Address = await userAdressRepo.findOne({where : {id}, relations : {user : true}})
    if(Address.user.id != user.id) {
      throw new BadRequestException(["A megadott  id nem található ezen az account-on"])

    }
    const currentOrder = await orderRepo.findOne({where : {status : Not("Kiszállítva"), user : user, selectedAddress : Address}, relations :{ user : true}})
    if(currentOrder != null) {
      throw new BadRequestException(["Nem törölhetsz olyan szállítási címet amelyik még egy aktív rendeléshez tartozik"])
    }
    await userAdressRepo.delete(id)
    
  }
}
