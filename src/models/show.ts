export interface ResultMetadata {
    confidence: number;
    score: number;
}

export interface CreatedBy {
    name: string;
    id: number;
    // eslint-disable-next-line camelcase
    credit_id: string;
    // eslint-disable-next-line camelcase
    profile_path: string;
    gender: number;
}

export interface SpokenLanguages {
    // eslint-disable-next-line camelcase
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface Networks {
    name: string;
    id: number;
    // eslint-disable-next-line camelcase
    logo_path: string;
    // eslint-disable-next-line camelcase
    origin_country: string;
}

export interface LastEpisodeToAir {
    name: string;
    // eslint-disable-next-line camelcase
    air_date: string;
    // eslint-disable-next-line camelcase
    production_code: string;
    // eslint-disable-next-line camelcase
    vote_count: number;
    id: number;
    // eslint-disable-next-line camelcase
    season_number: number;
    overview: string;
    // eslint-disable-next-line camelcase
    episode_number: number;
}

export interface Genres {
    id: number;
    name: string;
}

export interface ProductionCompanies {
    id: number;
    // eslint-disable-next-line camelcase
    logo_path: string;
    name: string;
    // eslint-disable-next-line camelcase
    origin_country: string;
}

export interface ExtractedMetadata {
    sha1: string;
    filename: string;
    file_type: string;
}

export interface ProductionCountries {
    iso_3166_1: string;
    name: string;
}

export interface Seasons {
    name: string;
    // eslint-disable-next-line camelcase
    air_date: string;
    id: number;
    // eslint-disable-next-line camelcase
    episode_count: number;
    // eslint-disable-next-line camelcase
    season_number: number;
    overview: string;
    // eslint-disable-next-line camelcase
    poster_path: string;
}

export interface Show {
    id: string;
    // eslint-disable-next-line camelcase
    result_metadata: ResultMetadata;
    popularity: number;
    tagline: string;
    // eslint-disable-next-line camelcase
    created_by: CreatedBy[];
    name: string;
    // eslint-disable-next-line camelcase
    spoken_languages: SpokenLanguages[];
    networks: Networks[];
    // eslint-disable-next-line camelcase
    original_language: string;
    // eslint-disable-next-line camelcase
    number_of_seasons: number;
    // eslint-disable-next-line camelcase
    next_episode_to_air: string;
    // eslint-disable-next-line camelcase
    vote_count: number;
    // eslint-disable-next-line camelcase
    episode_run_time: number[];
    // eslint-disable-next-line camelcase
    number_of_episodes: number;
    // eslint-disable-next-line camelcase
    last_episode_to_air: LastEpisodeToAir;
    // eslint-disable-next-line camelcase
    in_production: boolean;
    // eslint-disable-next-line camelcase
    original_name: string;
    // eslint-disable-next-line camelcase
    vote_average: number;
    // eslint-disable-next-line camelcase
    last_air_date: string;
    languages: string[];
    status: string;
    homepage: string;
    // eslint-disable-next-line camelcase
    origin_country: string[];
    genres: Genres[];
    overview: string;
    // eslint-disable-next-line camelcase
    production_companies: ProductionCompanies[];
    // eslint-disable-next-line camelcase
    extracted_metadata: ExtractedMetadata;
    type: string;
    // eslint-disable-next-line camelcase
    first_air_date: string;
    // eslint-disable-next-line camelcase
    poster_path: string;
    // eslint-disable-next-line camelcase
    production_contries: ProductionCountries[];
    seasons: Seasons[];
    // eslint-disable-next-line camelcase
    backdrop_path: string;
}
