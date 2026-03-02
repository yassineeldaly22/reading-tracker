import { IsUUID, IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ReadingStatusEnum } from '../entities/reading-status.entity';

export class CreateReadingStatusDto {
  @IsString()
  @IsNotEmpty()
  userId: string; // Temporary mock field

  @IsUUID()
  @IsNotEmpty()
  bookId: string;

  @IsEnum(ReadingStatusEnum)
  status: ReadingStatusEnum;
}