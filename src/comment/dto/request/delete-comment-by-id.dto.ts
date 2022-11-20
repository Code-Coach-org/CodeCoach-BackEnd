import { PickType } from '@nestjs/mapped-types';
import { BaseCommentDto } from '../base-comment.dto';

export class DeleteCommentByIdDto extends PickType(BaseCommentDto, ['commentId']) { }
