import { Module } from '@nestjs/common';
import { BoardResolver } from './board.resolver';
import { FetchBoardService } from './services/queries/fetchBoard.service';

@Module({
  providers: [BoardResolver, FetchBoardService]
})
export class BoardsModule {}
