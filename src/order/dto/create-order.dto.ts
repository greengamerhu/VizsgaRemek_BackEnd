import { UserAddress } from "src/user_adress/entities/user_adress.entity";
import { IsNotEmpty, IsNotEmptyObject, IsObject } from "class-validator";


export class CreateOrderDto {
    @IsNotEmpty()
    @IsObject()
    @IsNotEmptyObject()
    selectedAddress: UserAddress
}
