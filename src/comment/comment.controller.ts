import { Body, Controller, Post } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/request/create-commnet.dto';

@Controller('comment')
export class CommentController {

    constructor(private readonly commentService: CommentService) {}

    @Post()
    createComment(@Body() createCommentDto: CreateCommentDto) {
        return this.createComment(createCommentDto);
    }
    
}

