import { Component, OnInit, Input } from '@angular/core';
import { Test } from '../test';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.scss']
})
export class TestDetailComponent implements OnInit {

  @Input() test?: Test;

  constructor() { }

  ngOnInit() {
  }

}
