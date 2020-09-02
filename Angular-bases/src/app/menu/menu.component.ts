import { Component, OnInit } from '@angular/core';

//Import components
import { DrinkComponent } from '../drink/drink.component'
import { ErrorComponent } from '../error/error.component'
import { ServiceComponent } from '../service/service.component'

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
