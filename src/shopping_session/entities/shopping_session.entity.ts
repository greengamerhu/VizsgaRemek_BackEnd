import User from "src/users/entities/user.entity";
import { OneToOne, PrimaryColumn } from "typeorm";

export class Shopping_Session {
    @PrimaryColumn() 
    @OneToOne(() => User )
    user : User
    
}
