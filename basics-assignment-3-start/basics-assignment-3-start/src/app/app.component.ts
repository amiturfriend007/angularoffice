import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    disabled:boolean=false;
    countdisabled:number=0;
    array:Array<Number>=[];
  onButtonPress()
  {   
      if(this.countdisabled%2==0)
      {
        this.disabled=true;
      }
      else
      {
         this.disabled=false; 
      }
      this.countdisabled++;
      this.array.push(new Date());
  }
  getColor()
  {
    if(this.countdisabled>5)
    {
        return 'blue';
    }
    else 
    {
        return 'red';
    }
  }

}
