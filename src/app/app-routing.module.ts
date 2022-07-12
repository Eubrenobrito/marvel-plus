import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CardCharacterComponent} from "./characters/character/card.character.component";

const routes: Routes = [
  {
    path:'', redirectTo: '/herois', pathMatch: 'full'
  },
  {
    path:'herois', component: CardCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
