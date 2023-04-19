import { Controller, Get, Post, Body,  Param, Delete, UseGuards, Request } from '@nestjs/common';
import { UserAdressService } from './user_adress.service';
import { CreateUserAdressDto } from './dto/create-user_adress.dto';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation, ApiParam } from '@nestjs/swagger';

@Controller('user-address')
export class UserAdressController {
  constructor(private readonly userAdressService: UserAdressService) {}

  @UseGuards(AuthGuard('bearer'))
  @Post()
  @ApiOperation({ description: 'Hozzáad egy címet a userhez' })
  @ApiParam({
    name : "createUserAdressDto",
    description : "Lásd a Dto szekciónál"
  } )
  @ApiParam({
    name : "req",
    description : "req.user használatával kapcsolom hozzá az adott címhez a usert"
    
  })
  create(@Body() createUserAdressDto: CreateUserAdressDto, @Request() req) {
    return this.userAdressService.create(createUserAdressDto, req.user);
  }

  @UseGuards(AuthGuard('bearer'))
  @Get()
  @ApiOperation({ description: 'Visszadja az összes címet ami az adott userhez tartozik' })
  @ApiParam({
    name : "createUserAdressDto",
    description : "Lásd a Dto szekciónál"
  } )
  @ApiParam({
    name : "req",
    description : "req.user használatával keresem ki az userhez tartozó címeket"
  })
  findAllByUser(@Request() req) {
    return this.userAdressService.findAll(req.user);
  }

  

  @UseGuards(AuthGuard('bearer'))
  @Delete(':id')
  @ApiOperation({ description: 'törli azt a címet amit megkap id-ból' })
  @ApiParam({
    name : "id",
    description : "Szállítási címnek az id-ja"
  } )
  @ApiParam({
    name : "req",
    description : "req.user használatával ellenörzöm hogy törölhető e, vagy hogy az id ahhoz a userhez tartozik"
  })
  remove(@Param('id') id: string, @Request() req) {
    return this.userAdressService.remove(+id, req.user);
  }
}
