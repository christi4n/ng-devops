import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollSpyDirective } from '../scroll-spy/scroll-spy.directive';
import { SectionsModule } from '../sections/sections.module';

@NgModule({
  declarations: [
    ScrollSpyDirective,
  ],
  imports: [
    CommonModule,
    SectionsModule
  ],
  exports: [
    ScrollSpyDirective,
    SectionsModule
  ],
  providers: [ScrollSpyDirective],
})
export class SharedModule { }
