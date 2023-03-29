import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { IPokemons } from '../../shared/models/pokemons';

@Injectable({
  providedIn: 'root'
})

export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(offset = 0, limit = 10 ): Observable<IPokemons> {
    const params = { offset, limit };
    return this.http.get<IPokemons>(`${environment.pokemon}/pokemon`, { params })
  }
}
