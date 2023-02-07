import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
    @Column()
    phoneNumber : string;

    @Column()
    shoppingCart_id : string;

}