import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

import { SharedModule } from '../../shared.module';

@Component({
  selector: 'pkm-favorite',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
    <div class="d-flex justify-content-center" id="favorite">
      <div *ngIf="!favorite; else not_favorite">
        <i class="bi bi-star" id="icon"></i>
      </div>

      <ng-template #not_favorite>
        <i class="bi bi-star-fill" id="icon"></i>
      </ng-template>
    </div>
  `,
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnChanges {

  @Input() favorite = false;

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes[`favorite`].currentValue);
  }
}
