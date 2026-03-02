import { Controller, Get } from '@nestjs/common';
import { RecommendationsService, UserPreferences } from './recommendations.service';

@Controller('recommendations')
export class RecommendationsController {
  constructor(private readonly recommendationsService: RecommendationsService) {}

  @Get('for-you')
  async getForYouFeed() {
    // MOCK DATA: Simulating a user who loves Sci-Fi and Frank Herbert, 
    // but DNF'd Fantasy books.
    const mockPreferences: UserPreferences = {
      favoriteAuthors: ['Frank Herbert'],
      favoriteGenres: ['Science Fiction'],
      dnfAuthors: [],
      dnfGenres: ['Fantasy', 'Romance'],
    };

    return await this.recommendationsService.getSmartRecommendations(mockPreferences);
  }
}