import { IsArray } from "class-validator";

export class CreateStoryDto {
  @IsArray()
  // To improve this to have a stronger validation.
  story: string[];
}
