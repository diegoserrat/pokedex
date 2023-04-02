import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FilterComponent } from './filter/filter.component';

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
