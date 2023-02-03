
import { Component, OnInit } from '@angular/core';
import { PokemonFull } from 'src/app/models/pokemon.model';
import { CathEmAllService } from 'src/app/services/cath-em-all.service';
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  public caughtPokemons: PokemonFull[] = [];

  deletePokemon(pokemon: PokemonFull){
    console.log(pokemon)
      this.catchEmAllService.updatePokemon(pokemon).subscribe();
  }

  constructor(
    private readonly catchEmAllService: CathEmAllService
    ) {}

    ngOnInit() {
      this.catchEmAllService.fetchCaughtPokemons();
  
      this.catchEmAllService.caughtPokemon.subscribe(
        (data) => this.caughtPokemons = data
      )
  }
}
