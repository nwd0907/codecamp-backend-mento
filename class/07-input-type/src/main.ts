import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

///////////////// 여기다가 연습하기 ////////////////////////////
console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')








console.log('연습코드!!!')

console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')
console.log('///////////////////////////////////////')