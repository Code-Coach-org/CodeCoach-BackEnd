import { IsNumber, IsString, Length, Validate } from 'class-validator';

export class BaseCommentDto {

    @IsNumber()
    commentId: number;

}