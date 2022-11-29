import { Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
@Entity({ name: 'banner' })
export class Banner {

    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({ unsigned: true })
    id: number;

    @Column({type: 'varchar', length: 255})
    image: string

    @Column({ type: 'varchar', length: 500, default: null })
    link: string

    @CreateDateColumn({ name: 'create_at', comment: '생성일' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'update_at', comment: '수정일' })
    updatedAt: Date;

    @DeleteDateColumn({ name: 'delete_at', comment: '삭제일' })
    deletedAt?: Date | null;

}