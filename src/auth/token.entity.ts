import User from "src/users/entities/user.entity";
import { Entity, ManyToOne, PrimaryColumn } from "typeorm";

/**
 * tokenek adattáblája, userekhez kötve
 */
@Entity()
export default class Token {
    @PrimaryColumn()
    token : string
    
    @ManyToOne(() => User)
    user : User

}