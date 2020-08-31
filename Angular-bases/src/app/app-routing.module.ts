import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';



//Import components
import { DrinkComponent } from './drink/drink.component'
import { ErrorComponent } from './error/error.component'

//Array of routes
const routes: Routes = [
  {path: '', component: DrinkComponent},
  {path: 'drink', component: DrinkComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
