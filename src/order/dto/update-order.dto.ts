import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';
import { IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateOrderDto {
    @IsNotEmpty()
    @ApiProperty({
        description : "A rendelés státusza",
        type : 'string',
        example :  "Feldolgozás alatt",
        required : true     
    })
    status : string
}
