import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';


import { UsersModule } from './users/users.module';
import { UserAdressModule } from './user_adress/user_adress.module';
import { UserAddress } from './user_adress/entities/user_adress.entity';
import { ShoppingSessionModule } from './shopping_session/shopping_session.module';
import { MenuModule } from './menu/menu.module';
import { CartItemModule } from './cart_item/cart_item.module';
import User from './users/entities/user.entity';

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
        User, UserAddress
        /* List of entities here */
      ],
      synchronize: true,
    }),
    UsersModule,
    UserAdressModule,
    ShoppingSessionModule,
    MenuModule,
    CartItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
