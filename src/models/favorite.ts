import { Cover } from './game';

interface Favorite {
    name: string;
    summary: string;
    cover: string;
    slug: string;
}

export interface IsFavorite {
    // eslint-disable-next-line camelcase
    is_favorite: boolean;
}

export default Favorite;
