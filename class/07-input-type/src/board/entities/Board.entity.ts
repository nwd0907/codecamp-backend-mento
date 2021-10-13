import { Entity, Column, PrimaryGeneratedColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { ObjectType,Field, ID } from '@nestjs/graphql';

@Entity()
@ObjectType()
export class Board {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id: number;

  @Column()
  @Field(() => String)
  title: string;

  @Column()
  @Field(() => String)
  contents: string;

  @Field(() => Date)
  @CreateDateColumn({type: 'timestamp'})
  createdAt: Date

  @Field(() => Date)
  @UpdateDateColumn({type: 'timestamp'})
  updatedAt: Date

}