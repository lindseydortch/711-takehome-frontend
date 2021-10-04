import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Test } from '../test';
import { TESTS } from '../mock-test';
import { MessageService } from 'src/app/messages/services/message.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private messageService: MessageService) { }

  getTests(): Observable<Test[]> {
    const tests = of(TESTS);
    this.messageService.add('TestService: fetched tests')
    this.messageService.add('Message Service')
    return tests;
  }

  getTest(id: number): Observable<Test>{
    const test = TESTS.find(t => t.id === id)!;
    this.messageService.add(`TestService: fetched test id: ${id}`);
    return of(test);
  }
}
