import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-cat',
  templateUrl: './cat.component.html',
  styleUrls: ['./cat.component.scss'],

})
export class CatComponent implements OnInit {
  @Input() cat;
  @Output() attack = new EventEmitter();
  @Output() run  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
