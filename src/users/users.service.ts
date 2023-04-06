import { BadRequestException, Injectable } from '@nestjs/common';
import { DataSource } from 'typeorm';
import RegisterUserDto from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as bcrypt from 'bcrypt';
import User from './entities/user.entity';
import { Role } from 'src/roles/role.enum';


@Injectable()
export class UsersService {
  constructor(private dataSource: DataSource) {
    
  }
  async create(registerDto: RegisterUserDto) {
    const userRepo = this.dataSource.getRepository(User)
    const IsEmailExist = await userRepo.findOne({ where: { email: registerDto.email}})
    if (!registerDto.fullName  || !registerDto.email || !registerDto.password || !registerDto.repassword) {
      throw new BadRequestException('All fields are required')
    }
    if (!(registerDto.password == registerDto.repassword)) {
      throw new BadRequestException('A jelszónak egyezniük kell')
    } 
    if (IsEmailExist) {
      throw new BadRequestException('ez az email cim már be van regisztrálva, jelentkezz be')
    }
    

    const user = new User()
    user.fullName = registerDto.fullName
    user.email = registerDto.email
    user.password = await bcrypt.hash(registerDto.password, 15)
    user.role = Role.User
    console.log(user)
    userRepo.save(user)
  }

  findAll() {
    const userRepo = this.dataSource.getRepository(User)
    const users = userRepo.find()
    return users
  }
  
  findOne(user : User) {
    let data  = {
      id : user.id,
      fullName : user.fullName,
      email :  user.email,
    }
    return data
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  async getProfile(req) {
    return req.user
  }
}
