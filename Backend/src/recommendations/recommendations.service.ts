import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Book } from '../books/entities/book.entity';

// We define an interface for the data we will eventually get from the User module
export interface UserPreferences {
  favoriteAuthors: string[];
  favoriteGenres: string[];
  dnfAuthors: string[];
  dnfGenres: string[];
}

@Injectable()
export class RecommendationsService {
  constructor(
    @InjectRepository(Book)
    private readonly bookRepository: Repository<Book>,
  ) {}

  async getSmartRecommendations(preferences: UserPreferences): Promise<any[]> {
    // 1. Fetch all books (In a massive production DB, you would pre-filter this via SQL)
    const allBooks = await this.bookRepository.find();

    // 2. Score each book based on the algorithm
    const scoredBooks = allBooks.map((book) => {
      let score = 0;

      // --- POSITIVE WEIGHTS ---
      if (preferences.favoriteAuthors.includes(book.author)) {
        score += 5; // Heavy weight for beloved authors
      }
      if (preferences.favoriteGenres.includes(book.genre)) {
        score += 3; // Medium weight for preferred genres
      }

      // --- NEGATIVE WEIGHTS (The DNF Factor) ---
      if (preferences.dnfAuthors.includes(book.author)) {
        score -= 10; // Massive penalty for authors they gave up on
      }
      if (preferences.dnfGenres.includes(book.genre)) {
        score -= 5; // Penalty for genres they don't finish
      }

      return { book, score };
    });

    // 3. Filter out negative scores, sort by highest score, and return the top 10
    return scoredBooks
      .filter((item) => item.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 10)
      .map((item) => ({
        ...item.book,
        matchScore: item.score, // Returning the score is great for debugging and UI transparency!
      }));
  }
}