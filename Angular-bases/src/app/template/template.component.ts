import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component'

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  public identificado: boolean;
  constructor() { 
    this.identificado = false;
  }

  ngOnInit() {
    
  }

  indentify() {
    this.identificado = true;
  }

}
