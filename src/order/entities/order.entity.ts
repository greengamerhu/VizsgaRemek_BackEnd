import { Menu } from "src/menu/entities/menu.entity";
import User from "src/users/entities/user.entity";
import { UserAddress } from "src/user_adress/entities/user_adress.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn('uuid')
    id: number

    @ManyToOne(type => User, user => user.id)
    user : User

    @ManyToOne(type => UserAddress, UserAddress => UserAddress.id)
    selectedAdress : UserAddress

    @Column()
    quantity : number

    @ManyToOne(() => Menu, menu => menu.food_id)
    @JoinColumn()
    menuItem : Menu


    @Column({default : "Feldolgozás alatt"})
    status : string;


    @Column()
    total : number;
    

}
