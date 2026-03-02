import { Controller, Post, Get, Body, Param, Delete } from '@nestjs/common';
import { ReadingStatusService } from './reading-status.service';
import { CreateReadingStatusDto } from './dto/create-reading-status.dto';

@Controller('reading-status')
export class ReadingStatusController {
  constructor(private readonly readingStatusService: ReadingStatusService) {}

  // POST: Set or update a status
  @Post()
  setStatus(@Body() createReadingStatusDto: CreateReadingStatusDto) {
    return this.readingStatusService.setStatus(createReadingStatusDto);
  }

  // GET: Retrieve a user's entire library
  @Get('user/:userId')
  findAllByUser(@Param('userId') userId: string) {
    return this.readingStatusService.findAllByUser(userId);
  }

  // DELETE: Remove a book from a user's library
  @Delete('user/:userId/book/:bookId')
  remove(@Param('userId') userId: string, @Param('bookId') bookId: string) {
    return this.readingStatusService.remove(userId, bookId);
  }
}