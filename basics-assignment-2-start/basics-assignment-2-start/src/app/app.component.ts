import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  username:string="";
  disableUser:boolean=true;
  checkUserEmpty(){
    if(this.username=="")
    {
        this.disableUser=true;
    }
    this.username="";
  }
}
