import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateWordDto } from './dto/create-word.dto';
import { UpdateWordDto } from './dto/update-word.dto';

import database, { stringifyStory } from 'src/database';

@Injectable()
export class WordService {
  create(createWordDto: CreateWordDto) {
    const lastIndex = database.stories.length - 1;
    const lastElementInArray = database.stories[lastIndex];
    lastElementInArray.push(createWordDto.word)
    console.log("created", createWordDto.word)
    return createWordDto.word;
  }

  findAll() {
    // get last index of array
    const lastIndex = database.stories.length - 1;
    console.log(stringifyStory(database.stories[lastIndex]))
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

  update(storyId: number, id: number, updateWordDto: UpdateWordDto) {
    const storySelected = database.stories[storyId];
    if (!storySelected) {
      return new HttpException('Story not found', HttpStatus.NOT_FOUND);
    }

    const wordSelected = storySelected[id]
    if (!wordSelected) {
      return new HttpException('Word not found', HttpStatus.NOT_FOUND);
    }

    storySelected[id] = updateWordDto.word;
    return storySelected;
  }

  remove(id: number) {
    return `This action removes a #${id} word`;
  }
}
