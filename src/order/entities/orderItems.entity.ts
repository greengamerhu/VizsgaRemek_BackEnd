import { Column, Entity, ManyToOne,  PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./order.entity";

/**
 * Különválasztva a rendelésektől, a megrendelt itemek listája (esetleges későbbi bővítés miatt)
 */
@Entity()
export class OrderItems  {
    @PrimaryGeneratedColumn('uuid') 
    id : string
  
    @Column()
    food_name : string;
    @Column()
    food_description : string;
    @Column()
    food_category : string;
    @Column()
    food_price : number;
    @Column()
    quantity: number
    @Column()
    total : number
    @ManyToOne(()=> Order,  order => order.orderItems, {onDelete : "CASCADE"})
    order : Order
}