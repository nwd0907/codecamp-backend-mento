import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardResolver } from './board.resolver';
import { Board } from './entities/Board.entity';
import { CreateBoardService } from './services/mutations/createBoard.service';
import { FetchBoardService } from './services/queries/fetchBoard.service';

@Module({
  imports: [TypeOrmModule.forFeature([Board])],
  providers: [BoardResolver, CreateBoardService, FetchBoardService]
})
export class BoardsModule {}
