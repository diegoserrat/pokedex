import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
      RouterOutlet,
      CommonModule,
      HttpClientModule
    ],
    template: `
      <router-outlet></router-outlet>
    `
})

export class AppComponent {
  title = 'pokedex';
}
