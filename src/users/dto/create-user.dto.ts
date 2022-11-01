import {IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateUserDto {
    @IsString()
    userName: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsString()
    password: string;

    @IsString()
    phone: string;
}

