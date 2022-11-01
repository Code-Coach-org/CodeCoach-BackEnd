import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserRepository } from './repository/user.repository';


@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(UserRepository) private usersRepository: UserRepository,
  ) { 
    this.usersRepository = usersRepository;
  }

  async create(createUserDto: CreateUserDto) {
    console.log(createUserDto)
    const { userName, email, password, phone } = createUserDto
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);
    const hashedPhone = await bcrypt.hash(phone, salt);
    const user = this.usersRepository.create({
        userName,
        email,
        password : hashedPassword,
        phone : hashedPhone
    })
    await this.usersRepository.save(user);
    return user
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async findOne(id: number): Promise<User> {
    const find = await this.usersRepository.findOneBy({ id })
    console.log(find)
    if(!find) {
      throw new NotFoundException(`Can't find Board with id ${id}`)
    } else {
      return find;
    }
  }

  async remove(id: number): Promise<void> {
    const del = await this.usersRepository.delete(id);
    console.log(del);
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<any>{
    console.log(updateUserDto);
    return await this.usersRepository.update(id, updateUserDto);
  }
}
