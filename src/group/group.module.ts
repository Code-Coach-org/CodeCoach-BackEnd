import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from '../role/entities/role.entity';
import { User } from '../user/entities/user.entity';
import { UserGroup } from './entities/userGroup.entity';
import { RoleModule } from '../role/role.module';
import { RoleService } from '../role/role.service';
import { UsersModule } from '../user/user.module';
import { UsersService } from '../user/user.service';
import { GroupController } from './group.controller';
import { GroupService } from './group.service';

@Module({
    imports: [UsersModule, RoleModule, TypeOrmModule.forFeature([UserGroup, User, Role])],
    controllers: [GroupController],
    providers: [GroupService, UsersService, RoleService]
})
export class GroupModule { }
