export interface ResultMetadata {
    confidence: number;
    score: number;
}

export interface PlayerPerspective {
    id: number;
    name: string;
    slug: string;
}

export interface Artwork {
    // eslint-disable-next-line camelcase
    alpha_channel: boolean;
    url: string;
    // eslint-disable-next-line camelcase
    image_id: string;
    animated: boolean;
    height: number;
    id: number;
    checksum: string;
    game: number;
    width: number;
}

export interface ReleaseDate {
    id: number;
    date: number;
}

export interface Website {
    id: number;
    url: string;
}

export interface Screenshot {
    url: string;
    // eslint-disable-next-line camelcase
    image_id: string;
    height: number;
    id: number;
    checksum: string;
    game: number;
    width: number;
}

export interface Cover {
    // eslint-disable-next-line camelcase
    alpha_channel: boolean;
    url: string;
    // eslint-disable-next-line camelcase
    image_id: string;
    animated: boolean;
    height: number;
    id: number;
    checksum: string;
    game: number;
    width: number;
}

export interface Genre {
    id: number;
    name: string;
    slug: string;
}

export interface Keyword {
    id: number;
    name: string;
    slug: string;
}

export interface ExtractedMetadata {
    sha1: string;
    filename: string;
    // eslint-disable-next-line camelcase
    file_type: string;
}

export interface Video {
    name: string;
    // eslint-disable-next-line camelcase
    video_id: string;
    id: number;
    checksum: string;
    game: number;
}

export interface Theme {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: string;
    // eslint-disable-next-line camelcase
    result_metadata: ResultMetadata;
    // eslint-disable-next-line camelcase
    player_perspectives: PlayerPerspective[];
    name: string;
    artworks: Artwork[];
    // eslint-disable-next-line camelcase
    release_dates: ReleaseDate[];
    url: string;
    tags: number[];
    // eslint-disable-next-line camelcase
    similar_games: number[];
    websites: Website[];
    // eslint-disable-next-line camelcase
    total_rating: number;
    slug: string;
    screenshots: Screenshot[];
    platforms: number[];
    // eslint-disable-next-line camelcase
    rating_count: number;
    cover: Cover;
    rating: number;
    genres: Genre[];
    hypes: number;
    keywords: Keyword[];
    category: number;
    // eslint-disable-next-line camelcase
    extracted_metadata: ExtractedMetadata;
    videos: Video[];
    summary: string;
    // eslint-disable-next-line camelcase
    total_rating_count: number;
    themes: Theme[];
}
