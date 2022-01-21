import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { CommonModule } from '@angular/common';
import { ExperienceComponent } from './experience/experience.component';
import { HomeComponent } from './home/home.component';
import { LightboxModule } from 'ngx-lightbox';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UiModalComponent } from './ui-modal/ui-modal.component';

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
  imports: [CommonModule, LightboxModule, NgbModule]
})
export class SectionsModule {}
