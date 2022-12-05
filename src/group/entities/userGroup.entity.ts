import { Column, CreateDateColumn, DeleteDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Role } from '../../role/entities/role.entity';
import { User } from '../../user/entities/user.entity';

@Entity({ name: 'usergroup' })
export class UserGroup {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @ManyToOne(type => User, user => user.id)
    @JoinColumn({ name: 'userId' })
    user: User;

    @Column({ nullable: false, unsigned: true })
    userId: number;

    @ManyToOne(
        () => Role,
        (role) => role.id,
    )
    @JoinColumn({ name: 'roleId' })
    role: Role;

    @Column({ nullable: false, unsigned: true })
    roleId: number;


    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
    deletedAt?: Date | null;
}