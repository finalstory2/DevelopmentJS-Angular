import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'game',
    templateUrl: 'game.component.html'
})

export class Game implements OnInit {
    
    public title: string = 'Name of the game';
    
    constructor() { 

    }

    ngOnInit() { }
}