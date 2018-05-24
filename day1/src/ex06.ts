import * as Rx from 'rxjs/Rx';

let nums: Array<number> = [10, 20, 33, 449, 12, 38, 55, 23];

let ob1 = Rx.Observable.from(nums);

ob1.subscribe(
    n => console.log('n is', n),
    ()=>console.log('something went wrong!'),
    ()=>console.log('Streaming is over!')
);
