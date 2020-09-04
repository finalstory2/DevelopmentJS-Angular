import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component'
import { TemplateComponent } from './template/template.component'
import { ServiceComponent } from './service/service.component'
import { PipesComponent } from './pipes/pipes.component'


//Import components
import { DrinkComponent } from './drink/drink.component'
import { ErrorComponent } from './error/error.component'

//Array of routes
const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'drink', component: DrinkComponent},
  {path: 'error/:errorNumber', component: ErrorComponent},
  {path: 'error', component: ErrorComponent},
  {path: 'template', component: TemplateComponent},
  {path: 'service', component: ServiceComponent},
  {path: 'pipes', component: PipesComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
