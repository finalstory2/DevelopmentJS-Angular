import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component' 

//Import service

import { SwordService } from '../service/sword.service'
import { sword } from '../models/sword'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [SwordService]
})
export class ServiceComponent implements OnInit {

  swords: Array<sword>;


  constructor(
    private _swordService: SwordService
  ) { }

  ngOnInit(): void {
    this.swords = this._swordService.getSwords();
    console.log(this.swords);
    this.get_swordsName();
  }

  get_swordsName(){
    this.swords.forEach((value, index) => {
      console.log(this.swords[index]);
    })
  }

}
