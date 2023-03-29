import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { ComponentsModule } from 'src/shared/components/components.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

@NgModule({
    imports: [
      HomeRoutingModule,
      HomeComponent,
      ComponentsModule,
    ]
})
export class HomeModule { }
