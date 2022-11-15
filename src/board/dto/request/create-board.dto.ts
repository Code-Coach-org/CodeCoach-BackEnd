import { PickType } from '@nestjs/mapped-types';
import { BaseBoardDto } from '../base-board.dto';

export class CreateBoardDto extends PickType(BaseBoardDto, ['name']) {}
