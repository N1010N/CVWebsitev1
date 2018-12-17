import { ViewChild , ElementRef,Component} from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { CommonService} from  'app/common.service';
@Component({
    selector: 'app-experience',
    templateUrl: './experience.component.html',
    styleUrls: ['./experience.component.css'],
        animations :[
    trigger('loadingAnim',[
     transition(':enter', [
    style({
        opacity: '0',
        width :'0',
        height:'0',                       // added for smoothness
    }),
    animate('1s 100ms ease-out', style({
        opacity: '1',
        width: '*',
        height: '*',                   // added for smoothness
    }))
  
     ])
     ])]
     

})
/** experience component*/
export class ExperienceComponent {
    /** experience ctor */
        currentState = 'initial';
    constructor(private _service: CommonService) {
       this._service.invokeEvent.subscribe(value => {
        if(value === "experience"){
         this.scroll(); 
       }
      });
      }
    /** publications ctor */
    @ViewChild('experienceDiv') myDiv: ElementRef;

     public scroll() {
      //window.scrollTo(300,600);
      this.myDiv.nativeElement.scrollIntoView({ behavior: 'smooth' });
     } 
}
