import { ViewChild, ElementRef, ContentChild } from '@angular/core';
import { Component,
   OnInit,
   Input,
   ViewEncapsulation,
   OnChanges,
   SimpleChanges,
   DoCheck,
   AfterContentInit,
   AfterContentChecked,
   AfterViewInit,
   AfterViewChecked,
   OnDestroy} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges,DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit,AfterViewChecked,OnDestroy {

  @Input() element:{type:string,name:string,content:string};
  @Input() name:string;
  @ViewChild('heading') header:ElementRef;
  @ContentChild('contentParagraph') paragraph:ElementRef;

  constructor() {
    console.log("Constructror has been invoked");
   }

  ngOnChanges(changes:SimpleChanges) {
    console.log("ngOnChanges has been invoked");
    console.log(changes);
  }

  ngOnInit() {
    console.log("ngOnInit has been invoked");
    console.log('Contect View '+ this.header.nativeElement.textContent);
    console.log('Paragraph View ngInit'+ this.paragraph.nativeElement.textContent);
  }
  ngDoCheck()
  {
    console.log("ngDoCheck has been invoked");
  }
   ngAfterContentInit()
   {
     console.log("ngAfterContentInit has been invoked");
     console.log('Paragraph View ngAfterContentInit'+ this.paragraph.nativeElement.textContent);
   }
   ngAfterContentChecked()
   {
     console.log("ngAfterContentChecked has been invoked");
     console.log('Paragraph View ngAfterContentChecked'+ this.paragraph.nativeElement.textContent);
   }
   ngAfterViewInit()
   {
     console.log("ngAfterViewInit has been invoked");
     console.log('Contect View '+ this.header.nativeElement.textContent);
     console.log('Paragraph View ngAfterViewInit'+ this.paragraph.nativeElement.textContent);
   }
   ngAfterViewChecked()
   {
     console.log("ngAfterViewChecked has been invoked");
   }
   ngOnDestroy()
   {
     console.log("ngOnDestroy has been invoked");
   }
}
