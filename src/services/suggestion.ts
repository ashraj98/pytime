import HttpClient from './http';
import { Suggestion } from '../models';

class SuggestionService {
  public static search(term: string) {
    return HttpClient.instance.get<Suggestion>(`suggestions/search/?search=${term}`);
  }
}

export default SuggestionService;
