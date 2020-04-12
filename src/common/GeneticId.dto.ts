import { IsMongoId } from 'class-validator';

export class GenericIdDto {
  @IsMongoId()
  id: string;
}
