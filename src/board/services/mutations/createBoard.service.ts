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

  createBoard(): string {
    this.boardRepository.insert({ title: "제목입니다~", contents: "내용입니다~" })

    return '성공!!';
  }
}