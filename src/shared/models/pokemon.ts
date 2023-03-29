export interface IPokemon {
  abilities: IAbilities[],
  base_experience: number,
  height: number,
  held_items: [],
  is_default: boolean,
  location_area_encounters: string,
  moves: IMovies[],
  name: string,
  order: number,
  past_types: [],
  species: IVersion[],
  sprites: any,
  stats: IStats[],
  types: ITypes[],
  weight: number
}

export interface IAbilities {
  abilitie: IVersion[],
  is_hidden: boolean,
  slot: number
}

export interface IGameIndicies {
  game_index: number,
  version: IVersion[],
}

export interface IMovies {
  movie: IVersion[],
  version_group_details: []
}

export interface IVersionGroupDetails {
  level_learned_at: number,
  move_learn_method: IVersion[]
}

export interface IStats {
  base_stat: number,
  effort: number,
  stat: IVersion[]
}

export interface ITypes {
  slot: number,
  type: IVersion[]
}

export interface IVersion {
  name: string,
  url: string
}
