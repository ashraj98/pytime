import HttpClient from './http';
import { IsFavorite, Favorite } from '../models';

class FavoriteService {
  public static addFavorite(slug: string, username:string) {
    return HttpClient.instance.post('favorites/add_favorite/', { username, slug });
  }

  public static removeFavorite(slug: string, username: string) {
    return HttpClient.instance.post('favorites/remove_favorite/', { username, slug });
  }

  public static isFavorite(slug: string, username: string) {
    return HttpClient.instance.post<IsFavorite>('favorites/is_favorite/', { username, slug });
  }

  public static getFavorites(username: string) {
    return HttpClient.instance.post<Favorite[]>('favorites/get_favorites/', { username });
  }
}

export default FavoriteService;
