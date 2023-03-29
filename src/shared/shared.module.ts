import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [
    CommonModule
  ]
})
export class SharedModule { }
