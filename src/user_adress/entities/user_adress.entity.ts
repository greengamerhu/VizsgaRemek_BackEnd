import User from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn,  ManyToOne,  PrimaryGeneratedColumn } from "typeorm";

/**
 * A felhasználó Szállítási címeinek adatáblája
 */
@Entity() 
export class UserAddress {
    @PrimaryGeneratedColumn() 
    id : number;
    @Column()
    address : string
    @Column()
    city : string
    @Column()
    postalCode : string
    @Column()
    mobileNumber : string

    @ManyToOne(() => User, user => user.id, {onDelete : "CASCADE"})
    @JoinColumn({ name: 'userId' })
    user: User;
    
}
