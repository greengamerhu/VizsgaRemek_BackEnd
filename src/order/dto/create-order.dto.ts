import { UserAddress } from "src/user_adress/entities/user_adress.entity";
import { IsNotEmpty, IsNotEmptyObject, IsObject } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateOrderDto {
    @IsNotEmpty()
    @IsObject()
    @IsNotEmptyObject()
    @ApiProperty({
        description : "A kiválasztott cím amire le szeretnék adni a rendelést",
        type : UserAddress,
        example :     {
            "id": 33,
            "address": "dashdf 13",
            "city": "Malo",
            "postalCode": "2234",
            "mobileNumber": "0000"
          }, 
        required : true     
    })
    selectedAddress: UserAddress
}
