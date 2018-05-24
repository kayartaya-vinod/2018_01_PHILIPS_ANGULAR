export function sayHello() {
    console.log('Hello, World!');
}

export const author = { name: 'Vinod', email: 'vinod@vinod.co' };

export class Person {
    private name: string;
    private city?: string;

    constructor(name: string = undefined) {
        this.name = name;
        this.city = 'Bengaluru';
    }

    info(): void {
        console.log(`Name = ${this.name}, City =${this.city}`);
    }
}
