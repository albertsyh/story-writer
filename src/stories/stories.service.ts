import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateStoryDto } from './dto/create-story.dto';
import { UpdateStoryDto } from './dto/update-story.dto';

import database, { stringifyStory } from 'src/database';

@Injectable()
export class StoriesService {
  create(createStoryDto: CreateStoryDto) {
    // add story to database
    database.stories.push(createStoryDto.story)
    return stringifyStory(database.stories[database.stories.length - 1])
  }

  findAll() {
    console.log(database)
    return database.stories.map(eachStory => stringifyStory(eachStory));
  }

  findOne(id: number) {
    if (!database.stories[id]) {
      // check if index exist in stories
      return new HttpException('Story not found', HttpStatus.NOT_FOUND)
    }
    return stringifyStory(database.stories[id])
  }

  update(id: number, updateStoryDto: UpdateStoryDto) {
    return `This action updates a #${id} story`;
  }

  remove(id: number) {
    return `This action removes a #${id} story`;
  }
}
