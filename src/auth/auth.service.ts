import { Injectable } from '@nestjs/common';
import User from 'src/users/entities/user.entity';
import * as crypto from 'crypto';
import Token from './token.entity';
import { DataSource } from 'typeorm';


@Injectable()
export class AuthService {
    constructor(private dataSource : DataSource) {}
    async findUserByToken(token : string) {
        const tokenRepo = this.dataSource.getRepository(Token);
        const tokenObj =  await tokenRepo.findOne({where: {token}, 
            relations : {user: true}
         });
        if (tokenObj == null) {
            return null;
        }
        return tokenObj.user;
    }
    async generateTokenFor(user : User) {
        const randomBytes = crypto.randomBytes(32)
        const toString = randomBytes.toString("hex")

        const token = new Token()
        token.token = toString
        token.user = user
        await this.dataSource.getRepository(Token).insert(token)

        return toString
    }

}

