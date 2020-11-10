import { Cover } from './game';

interface Favorite {
    name: string;
    summary: string;
    cover: Cover;
    slug: string;
}

export interface IsFavorite {
    // eslint-disable-next-line camelcase
    is_favorite: boolean;
}

export default Favorite;
