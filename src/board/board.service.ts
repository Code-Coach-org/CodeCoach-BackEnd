import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBoardDto } from './dto/request/create-board.dto';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardService {
    constructor(
        @InjectRepository(Board) private boardRepository: Repository<Board>
    ) { }

    async CreateBoard(createBoardDto: CreateBoardDto): Promise<void> {
        await this.boardRepository.save(createBoardDto);
    }



}
