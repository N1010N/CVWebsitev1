import {Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject'; 

@Injectable()
export class CommonService {
  invokeEvent: Subject<any> = new Subject(); 

  callMethodComponent(componentName : string) { 
    this.invokeEvent.next(componentName);   
  }
}
