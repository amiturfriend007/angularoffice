import { Component, OnInit } from '@angular/core';

@Component({
  //selector: '[app-servers]',
  //selector:'.app-servers',
  selector:'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
    serverName:string="ServerName";
    allowNewServer = false;
    serverCreationStatus="No Server has been created!";
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);

  }

  ngOnInit() {
    
  }
  onCreateServer(){
    //this.allowNewServer=false;
    this.serverCreationStatus="A New Server has been created!"+this.serverName;
  }
  onUpdateServerName(event:Event)
  {
      this.serverName=(<HTMLInputElement>event.target).value;
  }
}
