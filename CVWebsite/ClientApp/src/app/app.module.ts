import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AboutMeComponent} from './about-me/about-me.component';
import { EducationComponent } from './education/education.component';
import { PublicationsComponent} from './publications/publications.component';
import { ExperienceComponent} from './experience/experience.component';
import { HonorsComponent} from './honors/honors.component';
import { ActivitiesComponent} from './activities/activities.component';
import { CommonService} from './common.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    AboutMeComponent,
    EducationComponent,
    PublicationsComponent,
    ExperienceComponent,
    HonorsComponent,
    ActivitiesComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([  {path:'about-me',  component: AboutMeComponent},
                     {path:'education',  component: EducationComponent},
                     {path:'publications',  component: PublicationsComponent},
                     {path:'experience',  component: ExperienceComponent},
                        {path:'honors',  component: HonorsComponent},
                        {path:'activities',  component: ActivitiesComponent}
                      
    ])  
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
