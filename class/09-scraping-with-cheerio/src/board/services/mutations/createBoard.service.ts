import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Board } from 'src/board/entities/Board.entity';
import { Repository } from 'typeorm';
import * as cheerio from 'cheerio'
import axios from 'axios';

@Injectable()
export class CreateBoardService {
  constructor(
    @InjectRepository(Board)
    private boardRepository: Repository<Board>,
  ) {}

  async createBoard(createBoardInput): Promise<Board> {
    const openGraph = {
      title: "",
      description: "",
      image: "",
      url: ""
    }

    if(createBoardInput.contents.includes("http")){
      const httpArr = []
      createBoardInput.contents.split(" ").forEach((el) => el.startsWith("http") && httpArr.push(el))
      if(httpArr.length){
        const html = await axios.get(httpArr[0])
        const $ = cheerio.load(html.data)
        $('meta').each((_, el) => {
          const key = $(el).attr('property')?.split(":")[1]
          if(key) openGraph[key] = $(el).attr('content')
        })
      }
    }

    console.log(openGraph)

    throw new Error()

    const result = await this.boardRepository.save({ title: createBoardInput.title, contents: createBoardInput.contents })
    return result;
  }
}