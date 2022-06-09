// 問1
let numbers = [2, 5, 12, 13, 15, 18, 22];
//ここに答えを実装してください。↓↓↓
console.log(numbers);
for(let i = 0; i < numbers.length; i++){
    if(numbers [i] % 2 === 0){
        num = numbers[i];
        isEven(num);
    }
}
function isEven() {
    console.log(num + 'は偶数です');
}

// 問2
class Car {
    constructor(name, gas, number){
        this.name = name;
        this.gas = gas;
        this.number = number;
    }
}

let getNumGas = new Car('ガソリン', '○○', '△△');
console.log(getNumGas.name + "は" + getNumGas.gas + "です。ナンバーは" + getNumGas.number + "です");