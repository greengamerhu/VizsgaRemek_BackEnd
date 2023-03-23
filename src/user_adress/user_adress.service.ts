import { Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { UpdateUserAdressDto } from './dto/update-user_adress.dto';
import { UserAddress } from './entities/user_adress.entity';

@Injectable()
export class UserAdressService {
  constructor(private dataSource: DataSource) { }
  async create(createUserAdressDto: CreateUserAdressDto, user) {
    //TODO:  validációt megírni
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
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

  findOne(id: number) {
    return `This action returns a #${id} userAdress`;
  }

  update(id: number, updateUserAdressDto: UpdateUserAdressDto) {
    return `This action updates a #${id} userAdress`;
  }

  async remove(id: number) {
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
     await userAdressRepo.delete(id)
    
  }
}
