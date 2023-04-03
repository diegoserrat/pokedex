export interface Pokemon {
  abilities: Abilities[],
  base_experience: number,
  height: number,
  held_items: [],
  is_default: boolean,
  location_area_encounters: string,
  moves: Movies[],
  name: string,
  order: number,
  past_types: [],
  species: Version[],
  sprites: any,
  stats: Stats[],
  types: Types[],
  weight: number
}

export interface Abilities {
  abilitie: Version[],
  is_hidden: boolean,
  slot: number
}

export interface IGameIndicies {
  game_index: number,
  version: Version[],
}

export interface Movies {
  movie: Version[],
  version_group_details: []
}

export interface IVersionGroupDetails {
  level_learned_at: number,
  move_learn_method: Version[]
}

export interface Stats {
  base_stat: number,
  effort: number,
  stat: Version[]
}

export interface Types {
  slot: number,
  type: Version[]
}

export interface Version {
  name: string,
  url: string
}
