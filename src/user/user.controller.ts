import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) { }

  @Get('/send-email')
  async sendEmail(@Query('email') email: string) {
    const sendEmail = await this.usersService.verifyEamil(email);
    if(sendEmail === '중복') {
      return Object.assign({
        Message: "이메일이 중복되었습니다. 다른 이메일로 회원가입 해주세요.",
        success: false
      })
    }
    return Object.assign({
      verifyKey: sendEmail,
      Message: "인증메일을 전송했습니다.",
      success: true
    })
  }

  @Get('/check-verifykey')
  async check(@Query('key') key: string){
    const checkNum = await this.usersService.checkNum(key);
    if(checkNum) {
      return Object.assign({
        Message: "이메일 인증이 완료되었습니다.",
        success: true
      })
    } else {
      return Object.assign({
        Message: "인증 코드가 다릅니다.",
        success: false
      })
    }
  }

  @Post('/create')
  async create(@Body() createUserDto: CreateUserDto) {
    const user = await this.usersService.register(createUserDto);
    return Object.assign({
      data: user,
      statusCode: 200,
      statusMessage: '유저 생성이 완료되었습니다.'
    })
  }

  @Get('findAll')
  async findAll() {
    const findall = await this.usersService.findAll();
    return Object.assign({
      data: findall,
      statusCode: 200,
      statusMessage: '모든 데이터를 조회했습니다.'
    })
  }

  @Get('/findUser/:id')
  async findOne(@Param('id') id: number) {
    const find = await this.usersService.findOne(id);
    return Object.assign({
      data: find,
      statusCode: 200,
      statusMessage: '데이터 조회에 성공했습니다.'
    })
  }

  @Patch('/updateUser/:id')
  async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto) {
    const ud = await this.usersService.update(id, updateUserDto);
    return Object.assign({
      data: ud,
      statusCode: 200,
      statusMessage: '업데이트가 완료되었습니다.'
    })
  }

  @Delete('/deleteUser/:id')
  async remove(@Param('id') id: number) {
    const del = await this.usersService.remove(id);
    return Object.assign({
      data: del,
      statusCode: 200,
      statusMessage: '유저 삭제가 완료되었습니다.'
    })
  }
}

function Hello() {
  throw new Error('Function not implemented.');
}
