import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Pokemon, PokemonFull } from 'src/app/models/pokemon.model';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { CathEmAllService } from 'src/app/services/cath-em-all.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css'],
})
export class CardItemComponent {
  constructor(
    private readonly route: ActivatedRoute,
    private readonly fetchDataService: FetchDataService,
    private readonly catchEmAllService: CathEmAllService
  ) {}
  public pokemon: PokemonFull = {
    id: 0,
    name: '',
    sprites: { other: { 'official-artwork': { front_default: '' } } },
  };
  public img: string = '';
  public caughtPokemons: PokemonFull[] = [];
  public loading: boolean = false;

  catch(pokemon: PokemonFull) {
    this.loading = true;
    this.pokemon.caught = true;
    this.catchEmAllService
      .catchPokemon(this.caughtPokemons, pokemon)
      .subscribe((result) => {
        this.caughtPokemons = result.pokemon;
        this.loading = false;
      });
  }

  ngOnInit() {
    this.catchEmAllService.fetchCaughtPokemons().subscribe((data) => {
      this.caughtPokemons = data[0].pokemon;
    });
    this.route.paramMap.subscribe((params: ParamMap) => {
      let filter: PokemonFull[] = this.caughtPokemons.filter(
        (pokemon) => pokemon.name === params.get('pokemonName')
      );
      console.log(filter);
      filter.length > 0
        ? ([this.pokemon, this.img] = [
            filter[0],
            filter[0].sprites.other['official-artwork'].front_default,
          ])
        : this.fetchDataService
            .fetchPokemon(
              'https://pokeapi.co/api/v2/pokemon/' + params.get('pokemonName')
            )
            .subscribe((data: PokemonFull) => {
              console.log(data);
              return ([this.pokemon, this.img] = [
                data,
                data.sprites.other['official-artwork'].front_default,
              ]);
            });
    });
  }
}
