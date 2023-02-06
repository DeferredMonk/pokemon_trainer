import { Component } from '@angular/core';
import { PokemonFull } from 'src/app/models/pokemon.model';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { FetchDataService } from 'src/app/services/fetch-data.service';
import { CathEmAllService } from 'src/app/services/cath-em-all.service';

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
  public caught: boolean = false;

  /**
   * catch iniziates the catching prosess
   * when pokemon is caught it finishes loading
   * @param {PokemonFull}
   */
  catch(pokemon: PokemonFull) {
    this.loading = true;
    this.catchEmAllService.catchPokemon(pokemon).subscribe(() => {
      this.loading = false;
    });
  }
  /**
   * checks if pokemon of list is caught
   * @param {string | null} pokemon name of pokemon
   * @returns {boolean}
   */
  isCaught(pokemon: string | null): boolean {
    return this.caughtPokemons.some(
      (item: PokemonFull) => item.name === pokemon
    );
  }

  /**
   * When component renders
   */
  ngOnInit() {
    this.catchEmAllService.caughtPokemon.subscribe(
      (data: PokemonFull[]) => (this.caughtPokemons = data)
    );
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.fetchDataService
        .fetchPokemon(params.get('pokemonName'))
        .subscribe((data: PokemonFull) => {
          return ([this.pokemon, this.img] = [
            data,
            data.sprites.other['official-artwork'].front_default,
          ]);
        });
    });
  }
}
