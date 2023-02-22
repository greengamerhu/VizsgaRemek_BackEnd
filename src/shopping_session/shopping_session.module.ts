import { Module } from '@nestjs/common';
import { ShoppingSessionService } from './shopping_session.service';
import { ShoppingSessionController } from './shopping_session.controller';

@Module({
  controllers: [ShoppingSessionController],
  providers: [ShoppingSessionService]
})
export class ShoppingSessionModule {}
