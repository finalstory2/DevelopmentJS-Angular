import { Component, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component' 

//Import service

import { SwordService } from '../services/sword.service'
import { sword } from '../models/sword'

//Request server Http

import { requestService } from '../services/requests.service'

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss'],
  providers: [SwordService, requestService]
})
export class ServiceComponent implements OnInit {
  public name: String;
  public avatar: String;
  public email: String;
  swords: Array<sword>;
  public userId: any;
  public user: any;


  constructor(
    private _swordService: SwordService,
    private _requestService: requestService
  ) { 
    this.userId = 1;
  }

  ngOnInit(): void {
    this.loadUser()
    

    // this.swords = this._swordService.getSwords();
    // console.log(this.swords);
    // this.get_swordsName();
  }

  loadUser() {
    this._requestService.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
        console.log(this.user);
        
        this.email = this.user.first_name + ' ' + this.user.last_name;
        this.avatar = this.user.avatar;
        this.name = this.user.email;

      },
      error => {
        console.log(error);
      }

      
    );
  }

  get_swordsName(){
    this.swords.forEach((value, index) => {
      console.log(this.swords[index]);
    })
  }

}
