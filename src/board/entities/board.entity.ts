import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'board' })
export class Board {

    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({ unsigned: true })
    boardId: number;

    @Column({
        type: 'varchar',
        length: 30,
        comment: '게시판 이름'
    })
    name: string;

}