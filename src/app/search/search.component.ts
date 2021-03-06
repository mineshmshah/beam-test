import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],

})
export class SearchComponent {

  @Input() suggestions = []
  @Input() term
  @Output() search = new EventEmitter();

  constructor() { }


}
