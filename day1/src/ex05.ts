import * as Rx from 'rxjs/Rx';

// button#btn1{Click Me}
let btn1 = document.getElementById("btn1");

let ob1 = Rx.Observable.fromEvent(btn1, 'click');
let sb1 = ob1.subscribe(
    evt => console.log('Clicked at', new Date())
);

// div>(input#tf1+h3#tf1text)
let tf1 = document.querySelector("#tf1");
let h3 = document.querySelector("#tf1text");

Rx.Observable.fromEvent(tf1, 'keyup')
    .subscribe(evt => h3.innerHTML = evt['target'].value);

let sb2 = Rx.Observable.interval(999)
    .subscribe(() => console.log(new Date()));

ob1.subscribe(evt => sb2.unsubscribe());