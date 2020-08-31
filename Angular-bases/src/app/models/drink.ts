export class Drink {
    

    constructor(
        public name: String | null,
        public price: Number | ConstrainDouble | null,
        public branch: String | null,
        public stock: Number
    ){
    }
}