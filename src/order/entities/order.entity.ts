import { Menu } from "src/menu/entities/menu.entity";
import User from "src/users/entities/user.entity";
import { UserAddress } from "src/user_adress/entities/user_adress.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItems } from "./orderItems.entity";
/**
 * A rendelések adatáblája
 */
@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(type => User, user => user.id, {onDelete : "CASCADE"})
    user : User

    @ManyToOne(type => UserAddress, UserAddress => UserAddress.id, {onDelete : "SET NULL"})
    selectedAddress : UserAddress


    @OneToMany(() => OrderItems, item => item.order)
    orderItems : OrderItems[]


    @Column({default : "Feldolgozás alatt"})
    status : string;

    @Column()
    total : number;
    @Column()
    orderDate: Date
    

}
