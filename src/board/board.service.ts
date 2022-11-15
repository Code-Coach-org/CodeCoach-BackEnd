import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/request/create-board.dto';
import { ViewArticleByIdDto } from './dto/request/view-article-by-id.dto';
import { Article } from './entities/article.entity';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board) private boardRepository: Repository<Board>,
        @InjectRepository(Article) private articleRepository: Repository<Article>
    ) { }

    async CreateBoard(createBoardDto: CreateBoardDto): Promise<void> {
        await this.boardRepository.save(createBoardDto);
    }

    async Validate(value: string): Promise<boolean> {
        return await this.boardRepository.countBy({ name: value }) ? false : true;
    }

    async ViewArticleById(viewArticleByIdDto: ViewArticleByIdDto) {
        const { boardId, articleId } = viewArticleByIdDto;
        return await this.articleRepository.find({
            relations: {
                board: true
            },
            where: {
                boardId: boardId,
                id: articleId
            }
        });
    }

}
