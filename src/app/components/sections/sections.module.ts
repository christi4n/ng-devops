import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LightboxModule } from 'ngx-lightbox';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ExperienceComponent } from './experience/experience.component';
import { UiModalComponent } from './ui-modal/ui-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    BlogComponent,
    UiModalComponent
  ],
  exports: [
    HomeComponent,
    AboutComponent,
    ExperienceComponent,
    BlogComponent,
    NgbModule
  ],
  imports: [
    CommonModule,
    LightboxModule,
    NgbModule
  ]
})
export class SectionsModule { }
