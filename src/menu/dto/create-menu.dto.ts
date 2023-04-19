import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export default class CreateMenuDto {
    food_id : number;
    @IsNotEmpty()
    @ApiProperty({
        description : "Az étel neve",
        type : 'string',
        example : "Random burger", 
        required : true     
    })
    food_name : string;

    @IsNotEmpty()
    @ApiProperty({
        description : "Az étel leírása",
        type : 'string',
        example : "Random burger leírása", 
        required : true     
    })
    food_description : string;
    @IsNotEmpty()
    @ApiProperty({
        description : "Az étel kategóriája",
        type : 'string',
        example : "Burger", 
        required : true     
    })
    food_category : string;
    @IsNotEmpty()
    @ApiProperty({
        description : "Az étel ára",
        type : 'number',
        example : 1000, 
        required : true     
    })
    food_price : number;
    @IsNotEmpty()
    @ApiProperty({
        description : "Az ételhez tartozó kép",
        type : 'string',
        example : 'burger.jpg', 
        required : true 
    })
    food_image : string
}
