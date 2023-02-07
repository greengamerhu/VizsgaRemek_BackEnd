import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User.entity";

Entity() 
export class Orders {
    @PrimaryGeneratedColumn()
    orderid : number;

    @ManyToOne(type => User , user => user.id) user : User;
}