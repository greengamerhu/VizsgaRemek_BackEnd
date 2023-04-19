import { Injectable } from '@nestjs/common';
import { Menu } from 'src/menu/entities/menu.entity'
import { DataSource } from 'typeorm';
import  CreateMenuDto  from './dto/create-menu.dto';
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
   return {menu : await this.dataSource.getRepository(Menu).find()};
  }


  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  async remove(id: number) {
    await this.dataSource.getRepository(Menu).delete(id);
  }
}
