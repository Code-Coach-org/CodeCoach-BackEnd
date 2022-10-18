import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserGroup } from './userGroup.entity';

@Entity({ name: 'role' })
export class Role {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column({ type: 'text', comment:'역활명'})
    roleName: string;

    @OneToMany(() => UserGroup, (user) => user.id)
    roleId: UserGroup[];

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
    deletedAt?: Date | null;
}