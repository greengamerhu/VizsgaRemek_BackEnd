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
      type : Menu,
    example : {"food_id":1,"food_name":"Klasszikus burger","food_description":"Ha az egyszerűséget kedveli, akkor a klasszikus burgerünk a megfelelő választás! Friss, szaftos húspogácsa, cheddar sajt, friss zöldségek és ízletes szósz, mindez egy friss zsemlében tálalva.","food_category":"Burger","food_price":3900,"food_image":"zoldburger.png"}, 
      required : true     
  })
    menuItem : Menu
}
