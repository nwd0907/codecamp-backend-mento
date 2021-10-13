import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/board/entities/Board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreateBoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async createBoard(createBoardInput): Promise<Board> {
    const result = await this.boardRepository.save({ title: createBoardInput.title, contents: createBoardInput.contents })
    return result;
  }
}