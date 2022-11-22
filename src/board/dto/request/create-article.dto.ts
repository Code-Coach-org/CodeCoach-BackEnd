import { PickType } from '@nestjs/mapped-types';
import { IsNumber, IsString, Length } from 'class-validator';
import { BaseBoardDto } from '../base-board.dto';

export class CreateArticleDto extends PickType(BaseBoardDto, ['boardId']) {
    
    @IsString()
    @Length(0, 30)
    title: string;

    @IsString()
    content: string;

}
