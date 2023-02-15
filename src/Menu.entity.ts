import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}