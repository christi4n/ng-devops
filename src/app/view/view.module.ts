import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../components/shared/shared.module';
import { ViewComponent } from './view.component';
import { ViewRoutingModule } from './view-routing.module';

@NgModule({
  declarations: [ViewComponent],
  imports: [CommonModule, ViewRoutingModule, SharedModule]
})
export class ViewModule {}
