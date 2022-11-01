import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../entities/role.entity';
import { User } from '../entities/user.entity';
import { UserGroup } from '../entities/userGroup.entity';
import { RoleModule } from '../role/role.module';
import { RoleService } from '../role/role.service';
import { UserModule } from '../user.module';
import { UsersService } from '../user.service';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
    imports: [UserModule, RoleModule, TypeOrmModule.forFeature([UserGroup, User, Role])],
    controllers: [GroupController],
    providers: [GroupService, UsersService, RoleService]
})
export class GroupModule { }
