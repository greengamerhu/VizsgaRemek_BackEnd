import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingSessionDto } from './create-shopping_session.dto';

export class UpdateShoppingSessionDto extends PartialType(CreateShoppingSessionDto) {}
