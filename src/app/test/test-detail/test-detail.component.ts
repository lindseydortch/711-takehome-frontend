import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Test } from '../test';
import { TestService } from '../services/test.service';

@Component({
  selector: 'app-test-detail',
  templateUrl: './test-detail.component.html',
  styleUrls: ['./test-detail.component.scss']
})
export class TestDetailComponent implements OnInit {

  @Input() test?: Test;

  constructor(
    private route: ActivatedRoute,
    private testService: TestService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getTest();
  }

  // getTest(): void {
  //   const url = String(this.route.snapshot.paramMap.get('url'));
  //   this.testService.getTest(url)
  //     .subscribe(test => this.test = test);
  // }

  getTest(): void {
    return console.log(`return later`)
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.test) {
      this.testService.updateTest(this.test)
        .subscribe(() => this.goBack())
    }
  }

  

}
