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
  public caughtPokemons: PokemonFull[] = [];
  private caught: boolean = false;
  private sessionStorageData: User = { id: 0, username: '', pokemon: [] };

  isCaught(pokemon: Pokemon): boolean {
    this.caught =
      this.sessionStorageData.pokemon.filter(
        (item) => item.name === pokemon.name
      ).length > 0;

    return this.caught;
  }

  ngOnInit() {
    this.catchEmAllService.fetchSessionStorage().subscribe((data) => {
      console.log(data);
      this.sessionStorageData = data;
    });

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
