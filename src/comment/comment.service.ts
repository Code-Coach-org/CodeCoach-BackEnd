import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/request/create-commnet.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) {}

    async CreateComment(createCommentDto: CreateCommentDto): Promise<void> {
        await this.commentRepository.save({
            ...createCommentDto,
            depth: 1
        })
    }
}
