import { Body, Controller, Delete, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/request/create-commnet.dto';
import { DeleteCommentByIdDto } from './dto/request/delete-comment-by-id.dto';

@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService) {}

    @Post()
    createComment(@Body() createCommentDto: CreateCommentDto) {
        return this.commentService.CreateComment(createCommentDto);
    }

    @Delete()
    deleteCommentById(@Body() deleteCommentByIdDto: DeleteCommentByIdDto) {
        return this.commentService.DeleteCommentById(deleteCommentByIdDto);
    }

}

