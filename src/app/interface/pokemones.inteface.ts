// Generated by https://quicktype.io

export interface PokemonesResponse {
    count:    number;
    next:     string;
    previous: string;
    results:  Pokemon[];
}

export interface Pokemon {
    name: string;
    url:  string;
}