import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.create(createUserDto);
    return Object.assign({
      data: user,
      statusCode: 200,
      statusMessage: '유저 생성이 완료되었습니다.'
    })
  }

  @Get('findAll')
  async findAll() {
    const findall =  await this.usersService.findAll();
    return Object.assign({
      data: findall,
      statusCode: 200,
      statusMessage: '모든 데이터를 조회했습니다.'
    })
  }

  @Get('/findUser:id')
  async findOne(@Param('id') id: number) {
    const find =  await this.usersService.findOne(id);
    return Object.assign({
      data: find,
      statusCode: 200,
      statusMessage: '데이터 조회에 성공했습니다.'
    })
  }

  @Patch('/updateUser:id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const ud =  await this.usersService.update(id, updateUserDto);
    return Object.assign({
      data : ud,
      statusCode: 200,
      statusMessage: '업데이트가 완료되었습니다.'
    })
  }

  @Delete('/deleteUser:id')
  async remove(@Param('id') id: number) {
    const del = await this.usersService.remove(id);
    return Object.assign({
      data: del,
      statusCode: 200,
      statusMessage: '유저 삭제가 완료되었습니다.'
    })
  }
}
