import { Component, Input, OnChanges,  SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'pkm-list',
  standalone: true,
  imports: [
    CommonModule,
    ListComponent
  ],
  styleUrls: ['./list.component.scss'],
  template: `
    <ul *ngFor="let pokemon of list">
      <li>{{pokemon | json}}</li>
    </ul>
  `
})
export class ListComponent implements OnChanges {

  @Input() list: any = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.list = changes['list'].currentValue
  }

}
