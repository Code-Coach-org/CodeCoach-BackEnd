import { Injectable, Req } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroup } from './entities/userGroup.entity';
import { RoleService } from '../role/role.service';
import { UsersService } from '../user/user.service';


@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(UserGroup)
        private readonly userGroupRepository: Repository<UserGroup>,
        private readonly roleService: RoleService,
        private readonly usersService: UsersService,
    ) { }

    async create(roleName: string, uid: number) {
        console.log(roleName, uid)
        const rid = await this.roleService.getId(roleName)
        console.log('Rid = ' + rid + ' ' + 'Uid = ' + uid)
        const group = this.userGroupRepository.create({
            roleId: rid,
            userId: uid
        })
        await this.userGroupRepository.save(group)
        return group
    }
}