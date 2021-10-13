import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/board/entities/Board.entity';
import { Repository } from 'typeorm';

@Injectable()
export class FetchBoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async fetchBoard(): Promise<Board> {
    const result = await this.boardRepository.findOne({where: {id: 2}})
    console.log(result)
    return result;
  }
}