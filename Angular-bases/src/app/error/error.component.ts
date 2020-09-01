import { partitionArray } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

//First need compnents of mudule

import { Router, ActivatedRoute, Params } from '@angular/router'

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ["./error.component.scss"]
})
export class ErrorComponent implements OnInit {
  public errorNumber: number | null | any;
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) { }
   
  redirect(){
    this._router.navigate(['/drink']);
  }

  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.errorNumber = params.errorNumber;
      console.log(this.errorNumber);
    });
  }

}
