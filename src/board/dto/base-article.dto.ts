import { IsNumber } from 'class-validator';

export class BaseArticleDto {

    @IsNumber()
    articleId: number;

}