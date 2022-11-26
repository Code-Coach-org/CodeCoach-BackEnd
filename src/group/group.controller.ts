import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { GroupService } from './group.service';



@Controller('userGroup')
export class GroupController {
    constructor(private readonly groupService: GroupService) { 
    }

    @Post('/create')
    async create(@Body('roleName') roleName:string, @Body('uid') uid:number) {
        await this.groupService.create(roleName, uid)
        return Object.assign({
            Massage: '유저 역활 활당 완료',
            success: true,
        })
    }
}
