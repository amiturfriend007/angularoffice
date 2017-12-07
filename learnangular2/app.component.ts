import {component} from '@angular/core';


@Component({

    selector:'my-component',

    template:`<div>
    Hello my name is {{name}}
    <button (click)="sayMyName()">Say my Name</button>
    </div>`

})

export class MyComponent{
    name: string;

    constructor()
    {
        this.name='Max';
    }
    sayMyName(){
        console.log('My name is ',this.name);
    }
}