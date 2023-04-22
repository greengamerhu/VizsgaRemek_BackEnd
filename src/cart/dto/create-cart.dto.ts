import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Menu } from "src/menu/entities/menu.entity"

export class CreateCartDto {
    @IsNotEmpty()
    @ApiProperty({
        description : "A kosárban lévő itemnek a darabszáma",
        type : 'number',
        example : 2, 
        required : true     
    })
    quantity: number
    @IsNotEmpty()
    @ApiProperty({
        description : "az adott étel ami a kosárba kerül",
        type : 'Menu',
        example : "", 
        required : true     
    })
    menuItem : Menu
}
