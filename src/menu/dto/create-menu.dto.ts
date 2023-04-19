import { IsNotEmpty } from "class-validator";

export default class CreateMenuDto {
    food_id : number;
    @IsNotEmpty()
    food_name : string;
    @IsNotEmpty()
    food_description : string;
    @IsNotEmpty()
    food_category : string;
    @IsNotEmpty()
    food_price : number;
    @IsNotEmpty()
    food_image : string
}
