import HttpClient from './http';
import { Recommendation } from '../models';

class RecommendationService {
  public static getRecommendations(tags: string[]) {
    return HttpClient.instance.post<Recommendation[]>('rec/', { tags });
  }
}

export default RecommendationService;
