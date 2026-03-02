import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ReadingStatusService } from './reading-status.service';
import { ReadingStatusController } from './reading-status.controller';
import { ReadingStatus } from './entities/reading-status.entity'; // Import the entity

@Module({
  imports: [TypeOrmModule.forFeature([ReadingStatus])], // Grant access
  controllers: [ReadingStatusController],
  providers: [ReadingStatusService],
})
export class ReadingStatusModule {}