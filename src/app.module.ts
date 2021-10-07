import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { BoardsModule } from './board/board.module';

@Module({
  imports: [
    BoardsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'src/common/graphql/schema.gql'
    })
  ],
})
export class AppModule {}
