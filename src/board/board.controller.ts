import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/request/create-board.dto';
import { ViewArticleByIdDto } from './dto/request/view-article-by-id.dto';

@Controller('board')
export class BoardController {
    constructor(private readonly boardService: BoardService) { }

    @Post('create')
    async createBoard(@Body() createBoardDto: CreateBoardDto): Promise<Object> {
        await this.boardService.CreateBoard(createBoardDto);
        return Object.assign({
            Message: "게시판이 생성되었습니다.",
            success: true
        })
    }

    @Get(':boardId/:articleId')
    async viewArticleById(
        @Param() viewArticleByIdDto: ViewArticleByIdDto
    ) {
        return this.boardService.ViewArticleById(viewArticleByIdDto);
    } 

}
