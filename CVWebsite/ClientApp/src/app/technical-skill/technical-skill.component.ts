import { HostListener,Component,ElementRef } from '@angular/core';
import {ViewChild} from '@angular/core';
import { CommonService} from  'app/common.service';

@Component({
    selector: 'app-technical-skill',
    templateUrl: './technical-skill.component.html',
    styleUrls: ['./technical-skill.component.css']
})
/** technicalSkill component*/
export class TechnicalSkillComponent {
    /** technicalSkill ctor */
    constructor(private _service: CommonService) {
       this._service.invokeEvent.subscribe(value => {
        if(value === "technical"){
         this.scroll(); 
       }
      });
      }
    /** publications ctor */
    @ViewChild('technicalDiv') myDiv: ElementRef;

     public scroll() {
      //window.scrollTo(300,600);
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth', block:'start' });
     }  
}
