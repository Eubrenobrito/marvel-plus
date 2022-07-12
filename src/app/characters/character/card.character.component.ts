import { Component, OnInit } from '@angular/core';
import {CharactersApiService} from './shared/characters-api.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-character',
  templateUrl: './card.character.component.html',
  styleUrls: ['./character.component.sass']
})
export class CardCharacterComponent implements OnInit {

  constructor(private characterApiService:CharactersApiService) { }
  todosHerois: []=[];
  ngOnInit(): void {
    this.pegaPersonagens()
  }

  pegaPersonagens(){
    // this.todosHerois = this.characterApiService.buscaTodosHerois();
    this.characterApiService.buscaTodosHerois().subscribe((res)=> {
      this.todosHerois = res
      console.log(res)
      console.log(this.todosHerois)
    })

  }
}
