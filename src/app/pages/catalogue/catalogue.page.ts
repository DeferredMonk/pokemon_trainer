import { Component, OnInit, NgModule, Input } from '@angular/core';
import {
  PokemonList,
  Pokemon,
  PokemonFull,
} from 'src/app/models/pokemon.model';
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
  constructor(private readonly fetchDataService: FetchDataService) {}

  public allPokem: Pokemon[] = [];

  ngOnInit() {
    this.fetchDataService.fetchPokemons().subscribe((data: PokemonList) => {
      window.sessionStorage.setItem(
        'allPokemons',
        JSON.stringify(data.results)
      );
      this.allPokem = data.results;
    });
    console.log(this.allPokem);
  }
}
