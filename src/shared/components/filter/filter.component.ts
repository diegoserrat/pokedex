import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';

import { SharedModule } from './../../shared.module';

@Component({
  selector: 'pkm-filter',
  standalone: true,
  imports: [
    SharedModule
  ],
  template: `
    <div class="container w-75 pt-4">
      <form [formGroup]="form">
        <div class="input-group mb-3">
          <input
            type="text"
            class="form-control border-right-0"
            placeholder="Pesquisar pokémon"
            formControlName="searched">
            <div class="input-group-append">
              <span class="input-group-text pointer bg-white" id="basic-addon2">
                <i class="bi bi-search" id="icon"></i>
              </span>
            </div>
        </div>
      </form>
    </div>
  `,
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @Output() searched = new EventEmitter<string>();

  form = new FormGroup({
    searched: new FormControl('')
  });

  ngOnInit(): void {
    this.form
        .controls
        .searched
        .valueChanges
        .pipe(debounceTime(400), distinctUntilChanged())
        .subscribe( search => this.searched.emit(search || ''));
  }
}
