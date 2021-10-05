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

  Pokemon: any;

  constructor(
    private route: ActivatedRoute,
    private pokemonsService: PokemonsService,
    private location: Location
  ) { }

  ngOnInit(): void {
    this.fetchPoke();
  }

  fetchPoke(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.pokemonsService.getOnePoke(id)
      .subscribe((data) => {
        this.Pokemon = data
        console.log(data)
        console.log(Object.keys(this.Pokemon.sprites.versions).length)
      })
  }
}
