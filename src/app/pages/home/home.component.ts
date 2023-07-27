import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/interface/pokemones.inteface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  pokemones: Pokemon[] = [];

  constructor(private pokemonSvc: PokemonService) { }

  ngOnInit(): void {
    this.pokemonSvc.getPokemones().subscribe(res => {
      console.log(res)
    })

  }

}
