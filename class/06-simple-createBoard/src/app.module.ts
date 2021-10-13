import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsModule } from './board/board.module';
import { Board } from './board/entities/Board.entity';

@Module({
  imports: [
    BoardsModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'codecamp_mysql',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'mysql',
      entities: [Board],
      synchronize: true,
      logging: true
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schema.gql'
    })
  ],
})
export class AppModule {}
