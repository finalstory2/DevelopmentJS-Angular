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
  public names: String[] | null;
  public branch: string;

  constructor() {
    this.names = new Array();
    this.branch = 'Coca Cola';
    this.drinks = [
      new Drink('Coke 3lt', 105, 'Coca Cola', 10),
      new Drink('Fanta 3lt', 102, 'Coca Cola', 4),
      new Drink('Fanta pomelo 3lt', 102, 'Coca Cola', 3),
      new Drink('Sprite 3lt', 104, 'Coca Cola', 1),
      new Drink('Fanta uva 3lt', 104, 'Coca Cola', 0)
    ]
   }

  ngOnInit(){
    console.log(this.drinks);
    this.Get_names();
    console.log(this.names);
  }

  Get_names(){
    this.drinks.forEach((drink, index) => {
      this.names.push(drink.name);
    });
  }

  
}
