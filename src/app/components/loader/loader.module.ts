import { CommonModule } from '@angular/common';
import { LoaderComponent } from './loader.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [LoaderComponent],
  exports: [LoaderComponent],
  imports: [CommonModule]
})
export class LoaderModule {}
