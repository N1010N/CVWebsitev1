import { Component,ViewChild,ElementRef } from '@angular/core';
import { CommonService} from  'app/common.service';
@Component({
    selector: 'app-activities',
    templateUrl: './activities.component.html',
    styleUrls: ['./activities.component.css']
})
/** activities component*/
export class ActivitiesComponent {
    /** activities ctor */
    constructor(private _service: CommonService) {
       this._service.invokeEvent.subscribe(value => {
        if(value === "activities"){
         this.scroll(); 
       }
      });
      }
    /** publications ctor */
    @ViewChild('activitiesDiv') myDiv: ElementRef;

     public scroll() {
      //window.scrollTo(300,600);
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block:'start' });
     }  
    
}
