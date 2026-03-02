import { PartialType } from '@nestjs/swagger';
import { CreateReadingStatusDto } from './create-reading-status.dto';

export class UpdateReadingStatusDto extends PartialType(CreateReadingStatusDto) {}
