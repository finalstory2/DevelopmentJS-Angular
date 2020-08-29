import { Component, OnInit, DoCheck, OnDestroy} from '@angular/core';

@Component({
  selector: 'CoursesComponent',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit, DoCheck, OnDestroy {

  public title = 'Old title load';

  constructor() { }

  ngOnInit(): void {
    // console.log('OnInit');
  }

  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('Change made successfully')
  }

  change_title(){
    this.title = 'New title load';
  
  }ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    
  }

  on

}
