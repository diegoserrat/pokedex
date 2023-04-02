/// <reference types="@angular/localize" />

import { enableProdMode, importProvidersFrom } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from './environments/environment';

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app-routing.module';
import { appReducer } from './core/store/reducers/app.reducer';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
    providers: [
      importProvidersFrom(
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        StoreModule.forRoot(
          { app: appReducer },
          { runtimeChecks: { strictStateImmutability: false, strictActionImmutability: false, } },
        )
      )
    ]
})
.catch(err => console.error(err));

