import User from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";


@Entity() 
export class UserAddress {
    @PrimaryGeneratedColumn() 
    id : number;
    @Column()
    adress : string
    @Column()
    city : string
    @Column()
    postalCode : string
    @Column()
    mobileNumber : string

    @ManyToOne(() => User, user => user.id)
    @JoinColumn({ name: 'userId' })
    user: User;
    
}
