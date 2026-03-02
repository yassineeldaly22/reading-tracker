import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RecommendationsService } from './recommendations.service';
import { RecommendationsController } from './recommendations.controller';
import { Book } from '../books/entities/book.entity'; // Import the entity

@Module({
  imports: [TypeOrmModule.forFeature([Book])], // Grant access to the Book table
  controllers: [RecommendationsController],
  providers: [RecommendationsService],
})
export class RecommendationsModule {}