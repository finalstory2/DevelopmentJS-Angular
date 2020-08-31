import { Component } from '@angular/core';
import { config } from './models/config';
import { DrinkComponent } from './drink/drink.component';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./style.css']
})
export class AppComponent {
  public title = 'Jose Gervacio Artigas';
  public description: string;
  public color: string;
  public background: string;

  constructor() {
    this.title = config.title;
    this.background = config.background;
    this.color = config.color;
    this.description = config.description;
  }
}

