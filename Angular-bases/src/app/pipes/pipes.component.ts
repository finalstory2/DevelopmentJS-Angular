import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { CalculadoraPipe } from './calculadora.pipe'

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  public date: any;

  constructor() { }

  ngOnInit(): void {

    this.date = new Date(2020,9,4);

  }

}
