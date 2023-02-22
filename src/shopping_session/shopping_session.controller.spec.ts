import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingSessionController } from './shopping_session.controller';
import { ShoppingSessionService } from './shopping_session.service';

describe('ShoppingSessionController', () => {
  let controller: ShoppingSessionController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingSessionController],
      providers: [ShoppingSessionService],
    }).compile();

    controller = module.get<ShoppingSessionController>(ShoppingSessionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
