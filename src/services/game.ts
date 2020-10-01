import HttpClient from './http';
import { Game, Recommendation } from '../models';

class GameService {
  public static detail(slug: string) {
    return HttpClient.instance.get<Game>(`games/${slug}`);
  }

  public static getRecommendations(tags: string[]) {
    return HttpClient.instance.post<Recommendation[]>('games/recommendations/', { tags });
  }
}

export default GameService;
