import { Resolver, Query, Mutation } from '@nestjs/graphql';
import { CreateBoardService } from './services/mutations/createBoard.service';
import { FetchBoardService } from './services/queries/fetchBoard.service';

@Resolver()
export class BoardResolver {
  constructor(
    private readonly fetchBoardService: FetchBoardService,
    private readonly createBoardService: CreateBoardService
  ) {}

  @Mutation(() => String)
  createBoard(): string {
    return this.createBoardService.createBoard();
  }

  @Query(() => String)
  fetchBoard(): string {
    return this.fetchBoardService.fetchBoard();
  }

  // createBoard()

  // deleteBoard()
}