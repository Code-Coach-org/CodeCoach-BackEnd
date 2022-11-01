import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsNumber()
    point: number;

    @IsNumber()
    level: number;

    @IsString()
    profile: string;

    @IsString()
    nickName: string;
}
