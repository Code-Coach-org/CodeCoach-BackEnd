import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { UserGroup } from '../../group/entities/userGroup.entity';

@Entity({ name: 'role' })
export class Role {

    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({ unsigned: true })
    id: number;

    @Column({ type: 'text', comment: '역할명' })
    roleName: string;

    @OneToMany(() => UserGroup, (userGroup) => userGroup.role)
    roleId: UserGroup[];

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
    deletedAt?: Date | null;

}