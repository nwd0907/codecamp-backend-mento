import { Injectable } from '@nestjs/common';

@Injectable()
export class FetchBoardService {
  fetchBoard(): string {
    return 'Hello World!';
  }
}