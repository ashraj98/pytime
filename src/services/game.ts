import HttpClient from './http';
import { Game } from '../models';

class GameService {
  public static detail(slug: string) {
    return HttpClient.instance.post<Game>('detail/', { slug });
  }
}

export default GameService;
