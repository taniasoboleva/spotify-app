export type T_Response = {
    albums: T_AlbumsRes;
    artists: T_ArtistRes;
    tracks: T_TracksRes;
}

export type T_TracksRes = {
    items: Array<T_TrackItems>;
}

export type T_ArtistRes = {
    items: Array<T_ArtistItems>;
}

export type T_AlbumsRes = {
    items: Array<T_AlbumsItems>;
}

export interface T_CommonItemsData {
    external_urls: Record<'spotify', string>;
    href: string;
    id: string;
    name: string;
    type: string;
    uri: string;
}

export interface T_ArtistItems extends T_CommonItemsData {
    followers?: T_ArtistFolowers;
    genres?: Array<string>;
    images?: Array<T_Images>;
    popularity?: number;
}

export type T_ArtistFolowers = {
    href: string;
    total: number;
}

export type T_DetailItem = {
    title: string;
    id: string;
}

export interface T_AlbumsItems extends T_CommonItemsData {
    album_type: string;
    artists: Array<T_ArtistItems>;
    available_markets: Array<string>;
    images: Array<T_Images>;
    release_date: string;
    release_date_precision: string;
    total_tracks: number;
}

export interface T_TrackItems extends T_CommonItemsData {
    album: T_AlbumsItems;
    artists: Array<T_ArtistItems>;
    available_markets: Array<string>;
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: Record<'isrc', string>;
    is_local: boolean;
    popularity: number;
    preview_url: string;
    track_number: number;
}

export type T_Images = {
    height: number;
    url: string;
    width: number;
}

export type T_AccessTokenRes = {
    access_token: string;
    token_type: string;
    expires_in: number;
}
