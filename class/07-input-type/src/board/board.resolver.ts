import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Board } from './entities/Board.entity';
import { CreateBoardService } from './services/mutations/createBoard.service';
import { FetchBoardService } from './services/queries/fetchBoard.service';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly createBoardService: CreateBoardService,
    private readonly fetchBoardService: FetchBoardService,
  ) {}

  @Mutation(() => Board)
  createBoard(): Promise<Board> {
    return this.createBoardService.createBoard();
  }

  @Query(() => Board)
  fetchBoard(){
    return this.fetchBoardService.fetchBoard();
  }

  // createBoard()

  // deleteBoard()
}