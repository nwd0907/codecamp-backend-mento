import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CreateBoardInput } from './dto/createBoard.input';
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
  createBoard(@Args({name: 'createBoardInput', type: () => CreateBoardInput}) createBoardInput: CreateBoardInput): Promise<Board> {
    return this.createBoardService.createBoard(createBoardInput);
  }

  @Query(() => Board)
  fetchBoard(@Args({name:'writer', type: () => String}) writer: string){
    return this.fetchBoardService.fetchBoard();
  }

  // createBoard()

  // deleteBoard()
}