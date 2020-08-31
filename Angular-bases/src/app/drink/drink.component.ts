import { Component, OnInit } from '@angular/core';
import { Drink } from '../models/drink' 

@Component({
  selector: 'drink_component',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.scss']
})
export class DrinkComponent implements OnInit {

  public title: String = 'Component of dirnk';
  public drinks: Array <Drink>;

  constructor() {
    this.drinks = [
      new Drink('Coke 3lt', 105, 'Coca Cola', 10)
    ]
   }

  ngOnInit(){
    console.log(this.drinks);
  }
  
}
