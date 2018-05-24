import { Person } from './person';

let p1: Person = new Person();
let p2: Person = new Person('Vinod KK');

p1.info();
p2.info();

// ES5 style object construction
let p3: any = { fname: 'Vinod' };
p3.email = 'vinod@vinod.co';
p3['mobile'] = '9731424784';
console.log(p3);

// ES6/typescript object de-construction
let { fname, email, mobile, city } = p3;

console.log(fname);
console.log(email);
console.log(mobile);

// ES6/typescript object construction
let p4: any = { fname, email, city: 'Bangalore' };
console.log(p4);