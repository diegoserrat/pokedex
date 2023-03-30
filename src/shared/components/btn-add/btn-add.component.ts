import { Component, Input } from '@angular/core';

import { SharedModule } from 'src/shared/shared.module';

@Component({
  selector: 'pkm-btn-add',
  standalone: true,
  imports: [ SharedModule ],
  template: `
    <button type="button" class="btn btn-warning rounded-pill ml-2 mr-2">
      <small>{{text}}</small>
    </button>
  `,
  styleUrls: ['./btn-add.component.scss']
})
export class BtnAddComponent {

  @Input() text = 'default';

}
