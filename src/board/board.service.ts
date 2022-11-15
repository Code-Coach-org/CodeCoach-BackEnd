import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateArticleDto } from './dto/request/create-article.dto';
import { CreateBoardDto } from './dto/request/create-board.dto';
import { ViewArticleByIdDto } from './dto/request/view-article-by-id.dto';
import { Article } from './entities/article.entity';
import { Board } from './entities/board.entity';
import { uploadFileURL } from 'src/config/multer.config';
import { extname } from 'path';
import * as fs from 'fs';

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

    uploadFileDiskDestination(file: Express.Multer.File): string {
        
        // TODO::게시판별 폴더 생성
        const uploadFilePath = `uploads`;
        // 폴더가 존재하지 않을 시 생성

        if (!fs.existsSync(uploadFilePath)) {
            fs.mkdirSync(uploadFilePath);
        }

        console.log(file.filename);

        //파일 이름
        const fileName = Date.now() + extname(file.filename);
        //파일 업로드 경로
        const uploadPath =
        __dirname + `/../../${uploadFilePath + '/' + fileName}`;

        //파일 생성
        fs.writeFileSync(uploadPath, file.path);

        return uploadFileURL(uploadFilePath + '/' + fileName);

    }

}
