import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/interface/pokemones.inteface';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  pokemones: Pokemon[] = [];
  siguiente = 0;
  atras= 0;
  btnActive=true; 

  constructor(private pokemonSvc: PokemonService, private router:Router){ }

  ngOnInit(): void {
    localStorage.removeItem('valor');
    this.pokemonSvc.getPokemones().subscribe(res => {
      this.pokemones = res
      console.log(res)
    })

  }

  onClickPokemon(nombre:string){
    this.pokemonSvc.getPokemonDetails(nombre).subscribe(pokemon=>{
      this.router.navigate(['/pokemon',pokemon.name])
    })
  }

  paginarPrevious(){
    this.atras=20;
    this.pokemonSvc.getPaginacionPrevious(this.atras).subscribe(res=>{
      this.pokemones = res;

      if(localStorage.getItem('valor') === 'detener')
      this.btnActive=true;
    })
  }

  paginarNext(){
    this.siguiente=20;
    
    this.pokemonSvc.getPaginacionNext(this.siguiente).subscribe(res=>{
      this.pokemones=res;
    })
    localStorage.removeItem('valor');
    this.btnActive=false;
  }

}
