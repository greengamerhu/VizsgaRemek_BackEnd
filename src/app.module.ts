import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { UsersModule } from './users/users.module';
import { UserAdressModule } from './user_adress/user_adress.module';
import { UserAddress } from './user_adress/entities/user_adress.entity';
import { MenuModule } from './menu/menu.module';
import User from './users/entities/user.entity';
import { Menu } from './menu/entities/menu.entity';
import { AuthModule } from './auth/auth.module';
import Token from './auth/token.entity';
import { PassportModule } from '@nestjs/passport/dist/passport.module';
import { CartModule } from './cart/cart.module';
import { Cart } from './cart/entities/cart.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT) || 3306,
      username: process.env.DB_USERNAME || 'root',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_DATABASE || 'database',
      entities: [
        User, UserAddress, Menu, Token, Cart
        /* List of entities here */
      ],
      synchronize: true,
    }),
    UsersModule,
    UserAdressModule,
    MenuModule,
    AuthModule,
    PassportModule,
    CartModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
