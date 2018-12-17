import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonService} from  'app/common.service';
@Component({
    selector: 'app-honors',
    templateUrl: './honors.component.html',
    styleUrls: ['./honors.component.css']
})
/** honors component*/
export class HonorsComponent {
    /** honors ctor */
   constructor(private _service: CommonService) {
       this._service.invokeEvent.subscribe(value => {
        if(value === "honors"){
         this.scroll(); 
       }
      });
      }
    /** publications ctor */
    @ViewChild('honorsDiv') myDiv: ElementRef;

     public scroll() {
      //window.scrollTo(300,600);
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block:'start' });
     }  
    
}
