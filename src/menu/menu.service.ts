import { Injectable } from '@nestjs/common';
import { Menu } from 'src/menu/entities/menu.entity'
import { DataSource } from 'typeorm';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';

@Injectable()
export class MenuService {
  constructor(private dataSource: DataSource) {
    
  }

  async create(createMenuDto: CreateMenuDto) {
    const menuItem = Object.assign(new Menu(), createMenuDto)
    await this.dataSource.getRepository(Menu).save(menuItem)
  }

  async findAll() {
   return await this.dataSource.getRepository(Menu).find();
  }

  findOne(id: number) {
    return `This action returns a #${id} menu`;
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
}
