import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-suggestion',
  templateUrl: './search-suggestion.component.html',
  styleUrls: ['./search-suggestion.component.scss'],
})
export class SearchSuggestionComponent implements OnInit {
  @Output() search = new EventEmitter();

  @Input() suggestions = [];
  @Input() term;
  constructor() { }

  ngOnInit() {
  }

}
