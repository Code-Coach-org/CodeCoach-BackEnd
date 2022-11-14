import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserGroup } from '../entities/usergroup.entity';
import { RoleService } from '../role/role.service';
import { UsersService } from '../user.service';


@Injectable()
export class GroupService {

    constructor(
        @InjectRepository(UserGroup)
        private readonly userGroupRepository: Repository<UserGroup>,
        private readonly roleService: RoleService,
        private readonly usersService: UsersService,
    ) { }

    async create(roleName: string, id: number) {
        const rid = await this.roleService.getId(roleName)
        const uid = await this.usersService.findOne(id)
        console.log('Rid = ' + rid + ' ' + 'Uid = ' + uid)
        const group = await this.userGroupRepository.createQueryBuilder()
            .insert()
            .into('usergroup')
            .values({
                userId: uid.id,
                roleId: rid
            })
            .execute();
        return group
    }
}