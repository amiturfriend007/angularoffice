import { Component, OnInit, EventEmitter, Output, ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerName = '';
  newServerContent = '';
  @ViewChild('serverNameContent') serverNameContent:ElementRef;
  constructor() { }

  ngOnInit() {
  }
  onAddServer(nameInput:HTMLInputElement,nameInput2:HTMLInputElement) {
    console.log(this.serverNameContent);
     console.log(nameInput2);
    this.serverCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverNameContent.nativeElement.value;
    });
  }

  onAddBlueprint(nameInput:HTMLInputElement,nameInput2:HTMLInputElement) {
     // this.serverNameContent.nativeElement.value='Something';
      console.log(nameInput.value);
      this.blueprintCreated.emit({
      serverName:nameInput.value,
      serverContent:this.serverNameContent.nativeElement.value  
    });
  }
}
