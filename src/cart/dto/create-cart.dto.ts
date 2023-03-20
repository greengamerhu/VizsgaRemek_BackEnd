import { IsNotEmpty } from "class-validator"
import { Menu } from "src/menu/entities/menu.entity"

export class CreateCartDto {
    @IsNotEmpty()
    quantity: number
    @IsNotEmpty()
    menuItem : Menu
}
