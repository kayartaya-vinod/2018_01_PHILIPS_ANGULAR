
var greet = function (name: string = 'Friend') {
    console.log(`Welcome ${name}!`);
}

function sayHello(){
    console.log('Hello, world!');
}

var sayHi = (name) => `Hi ${name}!`;

sayHello();
greet('John');
console.log(sayHi('Jane'));