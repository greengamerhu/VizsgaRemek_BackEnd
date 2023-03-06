import { Injectable } from '@nestjs/common';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { UpdateUserAdressDto } from './dto/update-user_adress.dto';

@Injectable()
export class UserAdressService {
  create(createUserAdressDto: CreateUserAdressDto) {
    
    return 'This action adds a new userAdress';
  }

  findAll() {
    return `This action returns all userAdress`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userAdress`;
  }

  update(id: number, updateUserAdressDto: UpdateUserAdressDto) {
    return `This action updates a #${id} userAdress`;
  }

  remove(id: number) {
    return `This action removes a #${id} userAdress`;
  }
}
