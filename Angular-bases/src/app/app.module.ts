import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { VideogameComponent } from './videogame/videogame.component';
import { Game } from './game/game.component';
import { CoursesComponent } from './courses/courses.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { DrinkComponent } from './drink/drink.component';
import { HttpClientModule } from "@angular/common/http";

//Two way data binding
import { FormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { TemplateComponent } from './template/template.component';
import { ServiceComponent } from './service/service.component';
import { PipesComponent } from './pipes/pipes.component';
import { CalculadoraPipe }  from './pipes/calculadora.pipe'
// import { SwordComponent } from './sword/sword.component';


@NgModule({
  declarations: [
    AppComponent,
    VideogameComponent,
    Game,
    CoursesComponent,
    TestComponent,
    DrinkComponent,
    ErrorComponent,
    HomeComponent,
    MenuComponent,
    TemplateComponent,
    ServiceComponent,
    PipesComponent,
    CalculadoraPipe
    // SwordComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Two way data binding
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
