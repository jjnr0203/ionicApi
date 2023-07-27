import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Pokemon, PokemonesResponse } from '../interface/pokemones.inteface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl:string ='https://pokeapi.co/api/v2';
  private limitPage: number = 20;
  public offsetPage: number = 0;

  //https://pokeapi.co/api/v2/pokemon?limit=20&offset=0
  constructor(private http: HttpClient) {}

    get params(){
      return {
        limit:this.limitPage,
        offset:this.offsetPage
      }
    }

    getPokemones():Observable<Pokemon[]>{
      return this.http.get<PokemonesResponse>(`${this.baseUrl}/pokemon`,{
        params:this.params
      }).pipe(
        map(res => res.results)
      )
    }
   }