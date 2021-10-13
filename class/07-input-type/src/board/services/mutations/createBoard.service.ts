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

  async createBoard(): Promise<Board> {
    const result = await this.boardRepository.save({ title: "제목입니다", contents: "내용입니다.", id: 3 })
    return result;
  }
}