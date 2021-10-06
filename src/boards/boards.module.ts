import { Module } from '@nestjs/common';
import { BoardsResolver } from './boards.resolver';
import { FetchBoardService } from './services/queries/fetchBoard.service';

@Module({
  providers: [BoardsResolver, FetchBoardService]
})
export class BoardsModule {}
