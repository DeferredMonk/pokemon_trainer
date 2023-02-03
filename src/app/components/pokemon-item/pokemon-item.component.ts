
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { Pokemon, PokemonFull } from 'src/app/models/pokemon.model';
import { CathEmAllService } from 'src/app/services/cath-em-all.service';
@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})
export class PokemonItemComponent implements OnInit {

  get pokemon(): PokemonFull[] | undefined {
    return this.userService.user?.pokemon;
  }

  deletePokemon(pokemon: PokemonFull){
    this.userService.removePokemon(pokemon);
    if(this.userService.user?.pokemon){
      this.catchEmAllService.removePokemon(this.userService.user?.pokemon);
    }
  }

  
  constructor(
    private readonly userService: UserService,
    private readonly catchEmAllService: CathEmAllService
    ) {}

    ngOnInit() {
      
  }
}
