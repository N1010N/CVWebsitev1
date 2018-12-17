import { Component } from '@angular/core';

@Component({
    selector: 'app-about-me',
    templateUrl: './about-me.component.html',
    styleUrls: ['./about-me.component.css']
})
/** about-me component*/
export class AboutMeComponent {
    /** about-me ctor */
    name = "AmirPouya Agha Sadeghi";
    job = "Software Engineering";
    constructor() {

      
    }
}
