import { Cart } from "src/cart/entities/cart.entity";
import { Order } from "src/order/entities/order.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToMany(() => Cart, cart => cart.id)
    @JoinColumn()
    cart: Cart[]

    @OneToMany(() => Order, order => order.id)
    @JoinColumn()
    order : Order[]
}
