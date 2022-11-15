import { Body, Controller, Post } from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/request/create-board.dto';

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
}
