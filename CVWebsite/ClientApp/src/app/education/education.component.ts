import { Component,ViewChild,ElementRef } from '@angular/core';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
import { CommonService} from  'app/common.service';
@Component({
    selector: 'app-education',
    templateUrl: './education.component.html',
    styleUrls: ['./education.component.css'],
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
/** education component*/
export class EducationComponent {

    /** education ctor */
    currentState = 'initial';

    changeState() {
      this.currentState = this.currentState === 'initial' ? 'final' : 'initial';
    }
       constructor(private _service: CommonService) {
       this._service.invokeEvent.subscribe(value => {
        if(value === "education"){
         this.scroll(); 
       }
      });
      }
    /** publications ctor */
    @ViewChild('educationDiv') myDiv: ElementRef;

     public scroll() {
      //window.scrollTo(300,600);
      
      this.myDiv.nativeElement.scrollIntoView({behavior:'smooth'});
     }    
   
}
