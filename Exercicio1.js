
const PertenceFibonacci = (x) => {
    let Num = 1;
    let NumFibonacci = 0;

    while(NumFibonacci <= x){
        
        if (NumFibonacci == x) return `O numero ${x} Pertence a sequencia Fibonacci`;
        let soma = Num + NumFibonacci;
        Num = NumFibonacci;
        NumFibonacci = soma;
    }
    return `O numero ${x} Não pertence a sequencia Fibonacci`
}

console.log(PertenceFibonacci(4));