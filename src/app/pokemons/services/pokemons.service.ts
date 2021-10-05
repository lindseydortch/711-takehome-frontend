import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry, map } from 'rxjs/operators';

import { Pokemon } from '../pokemons-interface';


@Injectable({
  providedIn: 'root'
})
export class PokemonsService {

  private readonly pokesURL = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient,
  ) { }

  getPokes(): Observable<Pokemon>{
    return this.http.get<Pokemon>(this.pokesURL).pipe(
      map((data: any) => {
        console.log(data.results)
        return data.results
      })
    )
  }

  getOnePoke(name: string): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.pokesURL}/${name}`).pipe(
      map((data: any) => {
        console.log(data.results)
        return data.results
      })
    )
  } 
 
}
