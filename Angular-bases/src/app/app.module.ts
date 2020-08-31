import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideogameComponent } from './videogame/videogame.component';
import { Game } from './game/game.component';
import { CoursesComponent } from './courses/courses.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DrinkComponent } from './drink/drink.component';

//Two way data binding
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    Game,
    CoursesComponent,
    TestComponent,
    DrinkComponent,
    ErrorComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Two way data binding
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
