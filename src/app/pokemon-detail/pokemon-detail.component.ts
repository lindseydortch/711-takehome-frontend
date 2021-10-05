import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PokemonsService } from '../pokemons/services/pokemons.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {

  Pokemon: any = [];

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchPoke();
  }

  fetchPoke(): void {
    const name = this.route.snapshot.params.get('name');
    this.pokemonsService.getOnePoke(name)
      .subscribe(pokemon => this.Pokemon = pokemon )
  }
}
