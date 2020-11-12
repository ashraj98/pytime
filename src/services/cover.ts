import HttpClient from './http';
import ArtworkMatch from '../models/artworkMatch';

class CoverService {
  public static match(games: string[], search: string[]) {
    return HttpClient.instance.post<ArtworkMatch[]>('covers/match/', { games, search });
  }
}

export default CoverService;
