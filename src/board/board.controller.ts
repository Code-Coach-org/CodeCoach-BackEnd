import { Body, Controller, Get, Param, ParseFloatPipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { multerDiskDestinationOutOptions } from 'src/config/multer.config';
import { BoardService } from './board.service';
import { CreateArticleDto } from './dto/request/create-article.dto';
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

    // TODO::Multer Option
    @Post('create/article')
    @UseInterceptors(FileInterceptor('file', multerDiskDestinationOutOptions))
    createArticle (
        @UploadedFile() file: Express.Multer.File,
        // @Body() createArticleDto
    ) {
        // console.log(createArticleDto);
        return this.boardService.uploadFileDiskDestination(file);
        // return this.userService.uploadFileDiskDestination(userId, files)
    }

    // @Post('create/article')
    // async createArticle(@Body() createArticleDto) 

    @Get(':boardId/:articleId')
    async viewArticleById(
        @Param() viewArticleByIdDto: ViewArticleByIdDto
    ) {
        return this.boardService.ViewArticleById(viewArticleByIdDto);
    }

}
