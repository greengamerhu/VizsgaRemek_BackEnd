import { Column, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";


@Entity() 
export class User_address {
    @PrimaryGeneratedColumn() 
    id : number;
    @ManyToOne(type => User , user => user.id) user: User; 
    @Column()
    adress : string
    @Column()
    city : string
    @Column()
    postalCode : string
    @Column()
    mobileNumber : string
    
}