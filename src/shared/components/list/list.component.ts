import { Component, Input, OnInit } from '@angular/core';
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
    <div class="">

    </div>
  `
})
export class ListComponent implements OnInit {

  @Input() list: any = [];

  ngOnInit(): void {}

}
