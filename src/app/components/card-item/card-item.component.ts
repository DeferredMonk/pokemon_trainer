import { Component, Input } from '@angular/core';
import { Pokemon, PokemonFull } from 'src/app/models/pokemon.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly fetchDataService: FetchDataService
  ) {}
  public pokemon: PokemonFull = {
    id: 0,
    name: '',
    sprites: { other: { 'official-artwork': { front_default: '' } } },
  };
  public img: string = '';

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.fetchDataService
        .fetchPokemon(
          'https://pokeapi.co/api/v2/pokemon/' + params.get('pokemonName')
        )
        .subscribe(
          (data: PokemonFull) =>
            ([this.pokemon, this.img] = [
              data,
              data.sprites.other['official-artwork'].front_default,
            ])
        );
    });
  }
}
