import { Component, OnInit } from '@angular/core';
// import { MenuComponent } from '../menu/menu.component' 
import { ContactUser } from '../models/user';
// import { ng-model } from '@angular/forms' 
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public ContactUser: ContactUser;
  public errors: any;
  constructor() { 
    this.ContactUser = new ContactUser('','','','')
  }

  feature_contact(){
    console.log(this.ContactUser);
    // this.errors = document.getElementById('errors') as HTMLElement;
    // console.log(this.errors);
    // this.errors.style.display = "block";
  }

  ngOnInit(): void {

  }

  show_errors(){
    
  }

}
