import { IsString, Length, Validate } from 'class-validator';
import { Unique } from '../util/customUniqueValidation';

export class BaseBoardDto {

    @Unique()
    @IsString()
    @Length(0, 30)
    name: string;

}