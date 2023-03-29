import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IPokemons } from '../../shared/models/pokemons';
import { IPokemon } from '../../shared/models/pokemon';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemons(offset = 0, limit = 10 ): Observable<IPokemons> {
    const params = { offset, limit };
    return this.http.get<IPokemons>(`${environment.pokemon}/pokemon`, { params })
  }

  getPokemon(id: string): Observable<IPokemon> {
    return this.http.get<IPokemon>(`${environment.pokemon}/pokemon/${id}`);
  }
}
