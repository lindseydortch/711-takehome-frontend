import { Component, OnInit } from '@angular/core';
import { Test } from '../test/test';
import { TestService } from '../test/services/test.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tests: Test[] = [];

  constructor(private testService: TestService) { }

  ngOnInit() {
    this.getTests();
  }

  getTests(): void {
    this.testService.getTests()
      .subscribe(tests => this.tests = tests.slice(1, 5));
  }

}
