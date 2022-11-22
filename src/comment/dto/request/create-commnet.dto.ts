import { PickType } from '@nestjs/mapped-types';
import { IsNumber, IsOptional, IsString, Length } from 'class-validator';
import { BaseArticleDto } from 'src/board/dto/base-article.dto';

export class CreateCommentDto extends PickType(BaseArticleDto, ['articleId']) {

    @IsOptional()
    @IsNumber() 
    parentId?: number; 

    @IsString()
    content: string;

}
