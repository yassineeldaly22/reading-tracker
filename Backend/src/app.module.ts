import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';

@Module({
  imports: [
    // This establishes the connection to your PostgreSQL database
    TypeOrmModule.forRoot({
      type: 'postgres',
      // Uses the Docker environment variable if available, otherwise falls back to localhost for local testing
      url: process.env.DATABASE_URL || 'postgresql://user:password@localhost:5432/reading_tracker_db',
      autoLoadEntities: true, // Automatically finds your Book entity
      synchronize: true,      // Auto-creates the database tables (ideal for development)
    }),
    BooksModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}