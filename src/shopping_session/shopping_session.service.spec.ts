import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingSessionService } from './shopping_session.service';

describe('ShoppingSessionService', () => {
  let service: ShoppingSessionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingSessionService],
    }).compile();

    service = module.get<ShoppingSessionService>(ShoppingSessionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
