import { Resolver, Query } from '@nestjs/graphql';
import { FetchBoardService } from './services/queries/fetchBoard.service';

@Resolver()
export class BoardsResolver {
  constructor(private readonly fetchBoardService: FetchBoardService) {}

  @Query(() => String)
  fetchBoard(): string {
    return this.fetchBoardService.fetchBoard();
  }

  // createBoard()

  // deleteBoard()
}