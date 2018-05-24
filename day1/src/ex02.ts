class Person {
    constructor(public fname:string, private lname: string = undefined) {
    }

    info(): void {
        console.log('fname', this.fname);
        console.log('lname', this.lname);
    }
}

let p1:Person = new Person('Vinod');
p1.info();
p1.fname = 'Ramesh';
// p1.lanme = 'Iyer'; // error by tsc

console.log(p1);