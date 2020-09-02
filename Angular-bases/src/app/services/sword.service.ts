import { Injectable } from '@angular/core'
import { sword } from '../models/sword';

@Injectable()
export class SwordService {

    public swords: Array <sword>;

    constructor() {
        this.swords = [
            new sword('Katana manuamune', 180, 'Tokyo'),
            new sword('2b Katana', 192, 'Nier Automata'),
            new sword('Kingth Arthoro', 180, 'England')
        ];
    }

    getText(): any{
        return 'we are headbottle';
    }

    getSwords(): any {
        return this.swords;
    }
    
}