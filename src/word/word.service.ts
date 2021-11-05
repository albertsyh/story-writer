import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

import database, { stringifyStory } from 'src/database';

@Injectable()
export class WordService {
  create(createWordDto: CreateWordDto) {
    return 'This action adds a new word';
  }

  findAll() {
    // get last index of array
    const lastIndex = database.stories.length - 1;
    return stringifyStory(database.stories[lastIndex]);
  }

  findOne(id: number) {
    const lastIndex = database.stories.length - 1;
    const lastElementInArray = database.stories[lastIndex];

    if (!lastElementInArray[id]) {
      return new HttpException('Word not found', HttpStatus.NOT_FOUND);
    }

    return lastElementInArray[id];
  }

  update(id: number, updateWordDto: UpdateWordDto) {
    return `This action updates a #${id} word`;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
