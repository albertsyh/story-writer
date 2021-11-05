import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StoriesModule } from './stories/stories.module';
import { WordModule } from './word/word.module';

@Module({
  imports: [StoriesModule, WordModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
