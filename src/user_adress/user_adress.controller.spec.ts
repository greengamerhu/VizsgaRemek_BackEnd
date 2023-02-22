import { Test, TestingModule } from '@nestjs/testing';
import { UserAdressController } from './user_adress.controller';
import { UserAdressService } from './user_adress.service';

describe('UserAdressController', () => {
  let controller: UserAdressController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserAdressController],
      providers: [UserAdressService],
    }).compile();

    controller = module.get<UserAdressController>(UserAdressController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
