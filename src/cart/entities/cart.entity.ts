import { Menu } from "src/menu/entities/menu.entity"
import User from "src/users/entities/user.entity"
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

/**
 * A felhasználó kosarának adatáblája
 */
@Entity()
export class Cart {
    @PrimaryGeneratedColumn('uuid')
    id: string
 
    @Column()
    total: number
 
    @Column()
    quantity: number
    
    @ManyToOne(type => User, user => user.id)
    @JoinColumn()
    user: User
    
    @ManyToOne(() => Menu, menu => menu.food_id, {onDelete : "CASCADE"})
    @JoinColumn()
    menuItem : Menu

 
   
}
