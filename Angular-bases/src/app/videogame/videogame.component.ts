import { Component } from '@angular/core';

@Component({
    selector: 'videogame',
    templateUrl: './videogame.component.html'
})


export class VideogameComponent {

    public title: string;
    public list: string;

    constructor() {
        this.title = "Component of videogame";
        this.list = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis tempore minima blanditiis consequatur odit reprehenderit pariatur similique dolor, adipisci fuga."; 

        console.log('Load component . . .');
    }
}