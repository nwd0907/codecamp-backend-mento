import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn, DeleteDateColumn } from 'typeorm';
import { ObjectType,Field, Int } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;

  @CreateDateColumn({ type: 'timestamp' })
  @Field(() => Date)
  createdAt: Date

  @UpdateDateColumn({ type: 'timestamp' })
  @Field(() => Date)
  updatedAt: Date

  @DeleteDateColumn({ type: 'timestamp'})
  @Field(() => Date)
  deletedAt: Date
}