import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideogameComponent } from './videogame/videogame.component';
import { Game } from './game/game.component'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    Game

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
