import HttpClient from './http';
import { Show, Recommendation } from '../models';
import ArtworkMatch from '../models/artworkMatch';

class ShowService {
  public static detail(slug: string) {
    return HttpClient.instance.get<Show>(`shows/"${slug}"`);
  }

  public static getRecommendations(tags: string[]) {
    return HttpClient.instance.post<Recommendation[]>('shows/recommendations/', {tags});
  }

  public static coverArt(games: string[], search: string[]) {
    return HttpClient.instance.post<ArtworkMatch[]>('shows/cover_art/', { games, search });
  }
}

export default ShowService;
