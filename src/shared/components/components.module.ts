import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './filter/filter.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    FilterComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FilterComponent,
  ]
})
export class ComponentsModule { }