import { Component, Input } from '@angular/core';

import { SharedModule } from '../../shared.module';

@Component({
  selector: 'pkm-favorite',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
    <div class="d-flex justify-content-center favorite">
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
export class FavoriteComponent {
  @Input() favorite = false;
}
