import { Role } from 'src/role/entities/role.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';
import { Board } from './board.entity';

@Entity({ name: 'board_role' })
export class BoardRole {

    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({ unsigned: true })
    id!: number;

    @ManyToOne(
        () => Role,
        (role) => role.roleId,
    )
    @JoinColumn({ name: 'roleId' })
    role!: Role;

    @Column({ nullable: false, unsigned: true })
    roleId!: number;

    @ManyToOne(type => Board, board => board.boardId)
    @JoinColumn({ name: 'boardId' })
    board!: Board;

    @Column({ nullable: false, unsigned: true })
    boardId!: number;

    @Column({ type: 'text', comment: '권한 종류' })
    authority!: string;

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt!: Date;

}