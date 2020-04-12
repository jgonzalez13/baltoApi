import { Min, IsOptional, IsNumberString, IsNumber } from 'class-validator';

export class PagedDto {
  @IsOptional()
  @IsNumber()
  @Min(0)
  offset: number;

  @IsOptional()
  @IsNumber()
  @Min(1)
  limit: number;
}
