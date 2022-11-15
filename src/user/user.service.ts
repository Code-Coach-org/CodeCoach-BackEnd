import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken'
import * as nodeMailer from 'nodemailer'
// import { RoleService } from '../role/role.service';
// import { GroupService } from './group/group.service';


@Injectable()
export class UsersService {
  authNum: string

  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) { }

  async verifyEamil(email: string): Promise<string> {
    this.authNum = Math.random().toString().substring(2, 6);
    const find = await this.usersRepository.findOneBy({ email })
    if (!find) {
      const transporter = nodeMailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'lap721181@gmail.com',
          pass: 'gmkirsyjsmollqnw'
        },
      })

      const mailOptions = {
        to: email,
        subject: '가입 인증 메일',
        html:
          `<p style='color: black'>회원 가입을 위한 인증번호 입니다.</p>
        <p style = 'color:black'>아래의 인증 번호를 입력하여 인증을 완료해주세요.</p>
        <h2>${this.authNum}</h2>`,
      }

      await transporter.sendMail(mailOptions)
      return this.authNum;
    } else {
      return '중복'
    }
  }

  async checkNum(verifyKey: string) {
    if (this.authNum === verifyKey) {
      return true
    } else {
      return false
    }
  }

  async register(createUserDto: CreateUserDto): Promise<User> {
    console.log(createUserDto)
    const { userName, email, password, phone } = createUserDto
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedPhone = await bcrypt.hash(phone, salt);
    const user = this.usersRepository.create({
      userName,
      email,
      password: hashedPassword,
      phone: hashedPhone
    })
    await this.usersRepository.save(user);
    return user
  }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const find = await this.usersRepository.findOneBy({ id })
    if (!find) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    } else {
      return find;
    }
  }

  async remove(id: number): Promise<void> {
    const del = await this.usersRepository.delete(id);
    console.log(del);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any> {
    console.log(updateUserDto);
    return await this.usersRepository.update(id, updateUserDto);
  }
}