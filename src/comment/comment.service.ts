import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/request/create-commnet.dto';
import { DeleteCommentByIdDto } from './dto/request/delete-comment-by-id.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
    constructor(@InjectRepository(Comment) private commentRepository: Repository<Comment>) { }

    async CreateComment(createCommentDto: CreateCommentDto): Promise<void> {
        await this.commentRepository.save({
            ...createCommentDto,
            depth: 1
        })
    }

    async DeleteCommentById(deleteCommentByIdDto: DeleteCommentByIdDto): Promise<void> {
        const { commentId } = deleteCommentByIdDto;
        if (!await this.commentRepository.countBy({ commentId: commentId })) {
            throw new NotFoundException("게시글을 찾을 수 없습니다.");
        }
        await this.commentRepository.delete({ commentId: commentId });
    }
}
