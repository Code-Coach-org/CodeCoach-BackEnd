import { Injectable, NotFoundException } from '@nestjs/common';;
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken'
import * as nodeMailer from 'nodemailer'
import { Role } from '../entities/role.entity';


@Injectable()
export class RoleService {
    constructor(
        @InjectRepository(Role)
        private readonly RoleRepository: Repository<Role>,
    ) { }

    async getId(roleName:string) {
        const find = await this.RoleRepository.findOneBy({roleName})
        if (!find) {
            throw new NotFoundException(`해당 역할이 없습니다.`)
        } else {
            console.log(find.id)
            return find.id;
        }
    }
}