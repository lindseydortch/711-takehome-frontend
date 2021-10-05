import { Component, OnInit } from '@angular/core';
import { PokemonsService } from './services/pokemons.service';
import { Pokemon } from './pokemons-interface';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.scss']
})
export class PokemonsComponent implements OnInit {

  Pokemons: any = [];

  constructor(private pokemonsService: PokemonsService) { }

  ngOnInit() {
    this.fetchPokes()
  }

  fetchPokes(): void {
    this.pokemonsService.getPokes()
      .subscribe( data => {
        this.Pokemons = data 
        console.log(data)
      })
  }

}
