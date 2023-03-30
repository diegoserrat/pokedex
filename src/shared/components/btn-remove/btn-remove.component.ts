import { Component, Input } from '@angular/core';

import { SharedModule } from '../../shared.module';

@Component({
  selector: 'pkm-btn-remove',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
    <button type="button" class="btn btn-danger rounded-pill ml-2 mr-2">
      <small> {{text}} </small>
    </button>
  `,
  styleUrls: ['./btn-remove.component.scss']
})
export class BtnRemoveComponent {

  @Input() text = 'default'

}
