import { IsNotEmpty } from "class-validator"
import { Menu } from "src/menu/entities/menu.entity"

export class CreateCartDto {
    //szoszi
    @IsNotEmpty()
    quantity: number
    @IsNotEmpty()
    menuItem : Menu
}
