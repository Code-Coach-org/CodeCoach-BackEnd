import { IsString, Length } from 'class-validator';

export class BaseBoardDto {

    @IsString()
    @Length(0, 30)
    name: string;

}
