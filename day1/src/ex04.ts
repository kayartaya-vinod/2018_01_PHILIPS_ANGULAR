let nums = [10, 20, 12, 94, 22, 5, 229, 3];
let index = nums.indexOf(12);
console.log('index of 12', index);

index = nums.indexOf(55);
console.log('index of 55', index);

let evenNums = nums.filter(num => num % 2 == 0);
console.log(evenNums);

let halfNums = nums.map(n => n / 2);
console.log(halfNums);

let squares = nums.map(n => n * n);
console.log(squares);

let names = ['vinod', 'shyam', 'john', 'jane'];

let ar1 = names.map(name => name.substr(0, 2));
console.log(ar1);

nums = [10, 20, 30];
let total = nums.reduce((accumulator, curr_val) => accumulator + curr_val);
console.log('total =', total);

let emps = [
    { id: 1, name: 'John', salary: 5000 },
    { id: 2, name: 'Allen', salary: 9000 },
    { id: 3, name: 'Ron', salary: 3000 },
];

let totalSal = emps.map(emp => emp.salary).reduce((a, b) => a + b);
console.log(totalSal);

totalSal = emps.reduce((a, b) => a + b.salary, 0);
console.log(totalSal);
