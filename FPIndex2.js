/* Functional Programming - Assignment 2 */

/* Create an Array with Numbers */

Num1 = [10, 8, 12, 36];

/* This function takes an array input, doubles the values, returns values above 20
and then reduces those values into summation of a single value output. */

function ProgrammingFunctional (Num1){
    let doubles = Num1.map(function(x){
        return x*2; 
    })
    let BigNumbers = doubles.filter(function(doubles){
        return doubles > 20;
    })

    let z = BigNumbers.reduce(function(sum, BigNumbers){
        return sum + BigNumbers;
    })
    console.log(z);
}

/* This consoles the ProgrammingFunctional function */

console.log(ProgrammingFunctional(Num1));

