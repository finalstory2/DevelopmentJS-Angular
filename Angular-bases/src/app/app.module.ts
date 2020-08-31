import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideogameComponent } from './videogame/videogame.component';
import { Game } from './game/game.component';
import { CoursesComponent } from './courses/courses.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    Game,
    CoursesComponent,
    TestComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
