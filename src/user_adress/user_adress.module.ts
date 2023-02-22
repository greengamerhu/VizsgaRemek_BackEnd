import { Module } from '@nestjs/common';
import { UserAdressService } from './user_adress.service';
import { UserAdressController } from './user_adress.controller';

@Module({
  controllers: [UserAdressController],
  providers: [UserAdressService]
})
export class UserAdressModule {}
