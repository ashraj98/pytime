import HttpClient from './http';
import { Game, Favorite } from '../models';

class FavoriteService {

   public static addFavorite(slug: string, username:string) {
    return HttpClient.instance.post<Game>('favorites/add_favorite/', { username, slug });
   }

   public static removeFavorite(slug: string, username: string) {
     return HttpClient.instance.post<Game>('favorites/remove_favorite/', { username, slug })
   }

   public static isFavorite(slug: string, username: string) {
     return HttpClient.instance.post<Game>('favorites/is_favorite/', { username, slug });
   }

   public static getFavorites(username: string) {
    return HttpClient.instance.post<Favorite[]>('favorites/get_favorites/', { username });
  }

}

export default FavoriteService;