import { Component, OnInit } from '@angular/core';
import { TESTS } from './mock-test';
import { Test } from './test';
import { TestService } from './services/test.service';
import { MessageService } from '../messages/services/message.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  
  // with one test
  // test: Test = {
  //   id: 1,
  //   name: 'Lindsey'
  // };

  // with array of tests before adding click event
  // tests = TESTS;

  // After services added 
  tests: Test[] = [];

  // with array of tests after adding click event 
  // selectedTest?: Test;

  constructor(private testService: TestService) {}

  ngOnInit() {
    this.getTests();
  }

  getTests(): void {
    // Before observable 
    // this.tests = this.testService.getTests();

    // After observable 
    this.testService.getTests()
      .subscribe(tests => this.tests = tests);
  }
}
