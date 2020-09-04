import { Pipe, PipeTransform } from '@angular/core' 

@Pipe({
    name: 'calculadora'
})

export class CalculadoraPipe implements PipeTransform {
    
    //Dato | calculadora: otro dato
    //param1 | calculadora: parm2
    transform(
        value: any, value_two: any
    ){
        let operations = `
        Sum: ${value+value_two} -
        Substraction: ${value-value_two} -
        Division: ${value/value_two} - 
        Multiplication: ${value*value_two} `

        return operations;

    //Experimental support for decorators is a feature that is 
    //subject to change in a future release. Set the 
    //'experimentalDecorators' option in your 'tsconfig' or 
    //'jsconfig' to remove this warning.ts(1219)


    }
}