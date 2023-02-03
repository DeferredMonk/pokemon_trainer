import { Component, OnInit } from '@angular/core';
import {
  PokemonList,
  Pokemon,
  PokemonFull,
} from 'src/app/models/pokemon.model';
import { User } from 'src/app/models/user.model';
import { CathEmAllService } from 'src/app/services/cath-em-all.service';
import { FetchDataService } from 'src/app/services/fetch-data.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.page.html',
  styleUrls: ['./catalogue.page.css'],
})
export class CataloguePage implements OnInit {
  public pokemons: PokemonList = {
    results: [],
  };
  constructor(
    private readonly fetchDataService: FetchDataService,
    private readonly catchEmAllService: CathEmAllService
  ) {}

  public allPokem: Pokemon[] = [];
  private caughtPokemons: PokemonFull[] = [];

  isCaught(pokemon: Pokemon): boolean {
    return this.caughtPokemons.some(
      (caughtPokemon) => caughtPokemon.name === pokemon.name
    );
  }

  ngOnInit() {
    this.catchEmAllService.caughtPokemon.subscribe(
      (pokemons) => (this.caughtPokemons = pokemons)
    );
    this.catchEmAllService.fetchCaughtPokemons();
    this.fetchDataService.fetchPokemons().subscribe((data) => {
      this.allPokem = data;
    });
  }
}
