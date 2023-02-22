import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export default class Users {
    @PrimaryGeneratedColumn() 
    id : number;
    @Column()
    fullName : string;
    @Column()
    email : string;
    @Column()
    password : string;
  
    

}