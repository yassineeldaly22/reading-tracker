import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReadingStatus } from './entities/reading-status.entity';
import { CreateReadingStatusDto } from './dto/create-reading-status.dto';

@Injectable()
export class ReadingStatusService {
  constructor(
    @InjectRepository(ReadingStatus)
    private readonly statusRepository: Repository<ReadingStatus>,
  ) {}

  // UPSERT LOGIC: Update if exists, Create if new
  async setStatus(createDto: CreateReadingStatusDto): Promise<ReadingStatus> {
    let existingStatus = await this.statusRepository.findOne({
      where: { userId: createDto.userId, bookId: createDto.bookId },
    });

    if (existingStatus) {
      existingStatus.status = createDto.status;
      return await this.statusRepository.save(existingStatus);
    } else {
      const newStatus = this.statusRepository.create(createDto);
      return await this.statusRepository.save(newStatus);
    }
  }

  // Fetch all books a specific user has interacted with, including the book data
  async findAllByUser(userId: string): Promise<ReadingStatus[]> {
    return await this.statusRepository.find({
      where: { userId },
      relations: ['book'], // This automatically pulls in the title, author, cover image, etc!
    });
  }

  // Remove a status completely (e.g., if a user accidentally clicked a button)
  async remove(userId: string, bookId: string): Promise<void> {
    const status = await this.statusRepository.findOne({
      where: { userId, bookId },
    });

    if (!status) {
      throw new NotFoundException('Status not found');
    }

    await this.statusRepository.remove(status);
  }
}