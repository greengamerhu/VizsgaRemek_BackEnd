import { Cart } from "src/cart/entities/cart.entity";
import { UserAddress } from "src/user_adress/entities/user_adress.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class User {
    @PrimaryGeneratedColumn() 
    id : number;
    @Column()
    fullName : string;
    @Column()
    email : string;
    @Column()
    password : string;
    @OneToMany(() => UserAddress, address => address.user)
    addresses: UserAddress[];

    @OneToMany(type => Cart, cart => cart.id)
    @JoinColumn()
    cart: Cart[]
}
