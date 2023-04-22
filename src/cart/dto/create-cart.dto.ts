import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"
import { Menu } from "src/menu/entities/menu.entity"

export class CreateCartDto {
    @IsNotEmpty()
    @ApiProperty({
      description : "Az adott étel darabszáma",
      type : 'number',
      example : 2, 
      required : true     
  })
    quantity: number
    @IsNotEmpty()
    @ApiProperty({
      description : "A kosárba helyezendő étel",
      type : 'Menu',
    example : {/**TODO meg irni a menuitemet t*/}, 
      required : true     
  })
    menuItem : Menu
}
