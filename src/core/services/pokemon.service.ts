import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Pokemons } from '../../shared/interfaces/pokemons';
import { Pokemon } from '../../shared/interfaces/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(offset: number, limit: number ): Observable<Pokemons> {
    const params = { offset, limit };
    return this.http.get<Pokemons>(`${environment.pokemon}/pokemon`, { params })
  }

  getPokemon(id: number): Observable<Pokemon> {
    return this.http.get<Pokemon>(`${environment.pokemon}/pokemon/${id}`);
  }

  getFilteredPokemons(): Observable<Pokemons> {
    const params = { offset: 0, limit: 1281 };
    return this.http.get<Pokemons>(`${environment.pokemon}/pokemon`, { params });
  }
}
