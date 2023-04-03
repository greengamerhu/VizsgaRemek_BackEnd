import { Menu } from "src/menu/entities/menu.entity";
import User from "src/users/entities/user.entity";
import { UserAddress } from "src/user_adress/entities/user_adress.entity";
import { IsNotEmpty } from "class-validator";

export class CreateOrderDto {
    @IsNotEmpty()
    selectedAdress : UserAddress
}
