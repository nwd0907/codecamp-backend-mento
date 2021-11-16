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

  // 1. 낱개로 받기
  // @Mutation(() => Board)
  // createBoard(
  //   @Args({ name: 'title', type: () => String }) title: string,
  //   @Args({ name: 'contents', type: () => String }) contents: string,
  // ): Promise<Board> {
  //   return this.createBoardService.createBoard(title, contents);
  // }

  // 2. 그룹으로 받기(DTO)
  @Mutation(() => Board)
  createBoard(
    @Args({name: 'createBoardInput', type: () => CreateBoardInput}) createBoardInput: CreateBoardInput
  ): Promise<Board> {
    return this.createBoardService.createBoard(createBoardInput);
  }

  @Query(() => Board)
  fetchBoard(){
    return this.fetchBoardService.fetchBoard();
  }

  // createBoard()

  // deleteBoard()
}

// function aaaa(aa, bb){

// }

// aaaa("ff", "gg1")