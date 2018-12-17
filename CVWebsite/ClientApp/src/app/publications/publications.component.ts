import { HostListener,Component,ElementRef } from '@angular/core';
import {ViewChild} from '@angular/core';
import { CommonService} from  'app/common.service';

@Component({
    selector: 'app-publications',
    templateUrl: './publications.component.html',
    styleUrls: ['./publications.component.css']
})
/** publications component*/
export class PublicationsComponent {

   constructor(private _service: CommonService) {
       this._service.invokeEvent.subscribe(value => {
        if(value === "publication"){
         this.scroll(); 
       }
      });
      }
    /** publications ctor */
    @ViewChild('publicDiv') myDiv: ElementRef;

     public scroll() {
      //window.scrollTo(300,600);
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block:'end' });
     }  
    
 }
