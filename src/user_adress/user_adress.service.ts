import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource, Not } from 'typeorm';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { UserAddress } from './entities/user_adress.entity';
import { Order } from 'src/order/entities/order.entity';
import User from 'src/users/entities/user.entity';

@Injectable()
export class UserAdressService {
  constructor(private dataSource: DataSource) { }
  /**
   * A szállítási cím létrehozása a user számára
   * @param createUserAdressDto a szállítási cím létrehozásához szükséges adatok
   * @param user a szállítási címhez való hozzákötés miatt kell
   * @throws BadRequestException(["a maximum felvehető címek száma 3"]) ha a userhez már tartozik 3 cím
   */
  async create(createUserAdressDto: CreateUserAdressDto, user) {
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
    const addresses = await userAdressRepo.findBy({user : user})
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

  /**
   * A userhez tartozó szállítási címek lekérdezése
   * @param user
   * @returns  az adott userhez tartozó címek listája
   */
  async findAll(user) {
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
    
    return {address: await userAdressRepo.findBy({user : user})}
  }



  /**
   * A szállítási cím törlése userek számára
   * @param id A szállítási cím idja
   * @param user 
   * @throws BadRequestException(["A megadott id nem található ezen az felhasználon"]) ha az address id nem található az adott userhez köttve
   * @throws BadRequestException(["Nem törölhetsz olyan szállítási címet amelyik még egy aktív rendeléshez tartozik"]) ha a törlendő címhez tartozik éppen aktív rendelés
   */
  async remove(id: number, user: User) {
    const orderRepo = this.dataSource.getRepository(Order)
    const userAdressRepo = this.dataSource.getRepository(UserAddress)
    const Address = await userAdressRepo.findOne({where : {id}, relations : {user : true}})
    if(Address.user.id != user.id) {
      throw new BadRequestException(["A megadott id nem található ezen az felhasználon"])

    }
    const currentOrder = await orderRepo.findOne({where : {status : Not("Kiszállítva"), user : user, selectedAddress : Address}, relations :{ user : true}})
    if(currentOrder != null) {
      throw new BadRequestException(["Nem törölhetsz olyan szállítási címet amelyik még egy aktív rendeléshez tartozik"])
    }
    await userAdressRepo.delete(id)
    
  }
}
