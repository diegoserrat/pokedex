import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { Store } from '@ngrx/store';

import { setPagesSearched } from '../../../core/store/actions/app.actions';
import { AppState } from '../../../core/store/app.state';
import { SharedModule } from '../../shared.module';

@Component({
  selector: 'pkm-pagination',
  standalone: true,
  imports: [
    SharedModule,
    NgbPaginationModule
  ],
  template: `
    <ngb-pagination
      class="d-flex justify-content-center "
      [collectionSize]="collectionSize"
      [boundaryLinks]="false"
      [maxSize]="5"
      [rotate]="true"
      [ellipses]="false"
      (pageChange)="pageChange($event)"/>
  `,
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() collectionSize = 0;
  @Input() pageList: number[] = [];
  @Output() page = new EventEmitter<number>()

  constructor(private store: Store<{app: AppState}>){}

  ngOnInit(): void {}

  pageChange(page: number) {
    this.pageList.forEach( (pg, index, array) => {
      if(page !== pg && index === array.length -1) {
        this.pageList.push(page);
        const uniq = [...new Set(this.pageList)];
        this.store.dispatch(setPagesSearched({page: uniq}));
      }
    })

    this.page.emit(page);
  }

}
