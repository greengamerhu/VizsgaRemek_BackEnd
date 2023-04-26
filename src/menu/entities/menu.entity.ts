import { Cart } from "src/cart/entities/cart.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";
/**
 * Az étlap adatáblája
 */
@Entity()
export class Menu {
    @PrimaryGeneratedColumn() 
    food_id : number;
    @Column()
    food_name : string;
    @Column()
    food_description : string;
    @Column()
    food_category : string;
    @Column()
    food_price : number;
    @Column()
    food_image : string

    @OneToMany(() => Cart, cart => cart.id)
    @JoinColumn()
    cart: Cart[]

  
}
