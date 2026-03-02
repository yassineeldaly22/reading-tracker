import { IsString, IsInt, IsOptional, Min, IsNotEmpty } from 'class-validator';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  author: string;

  @IsString()
  @IsNotEmpty()
  genre: string;

  @IsInt()
  @Min(1)
  pageCount: number;

  @IsString()
  @IsOptional()
  language?: string;
}