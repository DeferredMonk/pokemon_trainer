import { Component, OnInit } from '@angular/core';
import {
  PokemonList,
  Pokemon,
  PokemonFull,
} from 'src/app/models/pokemon.model';
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
  public caughtPokemons: PokemonFull[] = JSON.parse(
    window.sessionStorage.getItem('trainer') || ''
  ).pokemon;

  ngOnInit() {
    window.sessionStorage.getItem('allPokemons') === null
      ? this.fetchDataService.fetchPokemons().subscribe((data: PokemonList) => {
          window.sessionStorage.setItem(
            'allPokemons',
            JSON.stringify(data.results)
          );
          this.allPokem = data.results;
        })
      : (this.allPokem = JSON.parse(
          window.sessionStorage.getItem('allPokemons') || ''
        ));
  }
}
