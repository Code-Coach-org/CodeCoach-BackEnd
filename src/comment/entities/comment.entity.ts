import { Entity, Column, PrimaryColumn, PrimaryGeneratedColumn, JoinColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from 'src/user/entities/user.entity';
import { Article } from 'src/board/entities/article.entity';

@Entity({ name: 'comment' })
export class CommentEntity {

    @PrimaryGeneratedColumn('increment')
    @PrimaryColumn({unsigned: true})
    commentId: number;

    @Column({
        default: false
    })
    deleted: boolean;
    
    @ManyToOne(type => User, user => user.userId)
    @JoinColumn({ name: 'id' })
    user!: User;

    @ManyToOne(type => Article)
    @JoinColumn({name: 'postId'})
    post!: Article;

    @Column({nullable: false, unsigned: true})
    postId!: number;

    @Column({
        unsigned: true
    })
    depth: number;
    
    @Column({
        default: false
    })
    parent: boolean;
    
    @Column({
        nullable: true,
        unsigned: true
    })
    parentId: number | null;

    @CreateDateColumn()
    createdAt: Date;

    @Column({
        type: 'text'
    })
    content: string;
}
