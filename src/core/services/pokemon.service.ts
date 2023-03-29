import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from '../../environments/environment';
import { IPokemon } from '../../shared/models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemon(offset = 0, limit = 10 ) {
    const params = { offset, limit };
    this.http.get<IPokemon>(`${environment.pokemon}/pokemon`, { params })
  }
}
