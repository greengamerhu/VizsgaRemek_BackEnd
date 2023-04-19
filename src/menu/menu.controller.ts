import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { MenuService } from './menu.service';
import  CreateMenuDto  from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from 'src/roles/roles.guard';
import { Roles } from 'src/roles/roles.decorator';
import { Role } from 'src/roles/role.enum';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Post()
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ description: 'Étel hozzá adása a menühöz, admin jogosultsággal' })
  @ApiParam({
    name : "createMenuDto",
    description : "Lásd a Dto szekciónál"
  } )
  create(@Body() createMenuDto: CreateMenuDto) {
    return this.menuService.create(createMenuDto);
  }

  @ApiOperation({ description: 'Visszaadja a Menüben lévő ételeket' })
  @Get()
  findAll() {
    return this.menuService.findAll();
  }



  @Patch(':id')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ description: 'Étel Módosítása, admin jogosultsággal' })
  @ApiParam({
    name : "updateMenuDto", 
    description : "Az étel modósításához szükséges adatok"
  } )
  @ApiParam({
    name : "updateMenuDto",
    description : "Az étel modósításához szükséges adatok"
  } )
  update(@Param('id') id: string, @Body() updateMenuDto: UpdateMenuDto) {
    return this.menuService.update(+id, updateMenuDto);
  }
  


  @Delete(':id')
  @UseGuards(AuthGuard('bearer'), RolesGuard)
  @Roles(Role.Admin)
  @ApiOperation({ description: 'Étel törlése, admin jogosultsággal' })
  @ApiParam({
    name : "id", 
    description : "Az étel id-ja" 
  })
  remove(@Param('id') id: number) {
    return this.menuService.remove(+id);
  }
}
