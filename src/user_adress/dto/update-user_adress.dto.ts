import { PartialType } from '@nestjs/mapped-types';
import { CreateUserAdressDto } from './create-user_adress.dto';

export class UpdateUserAdressDto extends PartialType(CreateUserAdressDto) {}
