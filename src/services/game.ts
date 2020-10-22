import HttpClient from './http';
import { Game, Recommendation } from '../models';
import ArtworkMatch from '../models/artworkMatch';

class GameService {
  public static detail(slug: string) {
    return HttpClient.instance.get<Game>(`games/${slug}`);
  }

  public static getRecommendations(tags: string[]) {
    return HttpClient.instance.post<Recommendation[]>('games/recommendations/', { tags });
  }

  public static coverArt(games: string[], search: string[]) {
    return HttpClient.instance.post<ArtworkMatch[]>('games/cover_art/', { games, search });
  }
}

export default GameService;
