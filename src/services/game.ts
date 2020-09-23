import { HttpClient } from "./http";
import { Recommendation } from "../models";

class GameService {
    public static detail(slug: string) {
        return HttpClient.instance.post<Recommendation[]>('detail/', { slug });
    }
}

export default GameService;
