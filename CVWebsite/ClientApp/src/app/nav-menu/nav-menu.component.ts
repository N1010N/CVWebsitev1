import { ViewChild,Component } from '@angular/core';
import { Input } from '@angular/core';
import { CommonService} from  'app/common.service';
import { trigger,state,style,transition,animate,keyframes,query,stagger } from '@angular/animations';
@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css'],
      animations :[
    trigger('navAnim',[
     transition(':enter', [
    style({
        opacity: '0',
        width :'0',
        height:'0',
        position: 'relative',// added for smoothness
    }),
    animate('1s 100ms ease-out', style({
        opacity: '1',
        width: '*',
        height: '*',                   // added for smoothness
    }))
  
     ])
     ])]

    
})
export class NavMenuComponent {
 constructor(private _service: CommonService) {
 }
   scrollToPublications(element)
  {
     this._service.callMethodComponent(element.currentTarget.id);
  }

}
