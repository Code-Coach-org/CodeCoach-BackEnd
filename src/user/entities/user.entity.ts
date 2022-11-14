import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserGroup } from './usergroup.entity';

@Entity({ name: 'user' })
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'varchar', length: 5, comment: '이름' })
    userName: string;

    @Column({ type: 'varchar', length: 50, comment: '유저 이메일' })
    email: string;

    @Column({ type: 'varchar', length: 500, comment: '유저 비밀번호' })
    password: string;

    @Column({ type: 'varchar', length: 20, comment: '유저 별명', default: null })
    nickName: string;

    @Column({ type: 'varchar', length: 250, comment: '프로필 이미지', default: null })
    profile: string;

    @Column({ type: 'varchar', length: 500, comment: '유저 전화번호' })
    phone: string;

    @Column({ type: 'int', comment: '마일리지', default: null })
    point: number;

    @Column({ type: 'int', comment: '유저 레벨', default: null })
    level: number;

    @OneToMany(() => UserGroup, (user) => user.id)
    userId: UserGroup[];

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
    deletedAt?: Date | null;

}