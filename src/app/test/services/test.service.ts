import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'
import { Test } from '../test';
// import { TESTS } from '../mock-test';
import { MessageService } from 'src/app/messages/services/message.service';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  // Call with mock data 
  // constructor(private messageService: MessageService) { }

  // getTests(): Observable<Test[]> {
  //   const tests = of(TESTS);
  //   this.messageService.add('TestService: fetched tests')
  //   this.messageService.add('Message Service')
  //   return tests;
  // }

  // getTest(id: number): Observable<Test>{
  //   const test = TESTS.find(t => t.id === id)!;
  //   this.messageService.add(`TestService: fetched test id: ${id}`);
  //   return of(test);
  // }

  private testsURL = `http://localhost:3000/poke`

  // Using HTTP 
  constructor(
    private http: HttpClient,
    private messageService: MessageService
  ) {}

  getTests(): Observable<Test[]> {
    // console.log(this.http.get<Test[]>(this.testsURL))
    // return this.http.get<Test[]>(this.testsURL)
    // .pipe(
    //   tap(_ => this.log(`fetched tests`)),
    //   catchError(this.handleError<Test[]>('getTests', []))
    // );

    let data = this.http.get<any>(this.testsURL)
      .pipe(map(res => {
        console.log(res.results)
        return res
      }))

    return data
  }

  // getTest(url: string): Observable<Test>{
  //   return console.log(`This will log an individual pokemon`)
  // }

  // Getting by ID 
  getTest(id: number): Observable<Test> {
    const url = `${this.testsURL}/${id}`
    return this.http.get<Test>(url).pipe(
      tap(_ => this.log(`Fetched hero id: ${id}`)), 
      catchError(this.handleError<Test>(`getTest id: ${id}`))
    )
  }

  updateTest(test: Test): Observable<any> {
    return this.http.put(this.testsURL, test, this.httpOptions).pipe(
      tap(_ => this.log(`updated test id: ${test.id}`)),
      catchError(this.handleError<any>('updateTest'))
    )
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  // Log a message
  private log(message: string) {
    this.messageService.add(`TestService: ${message}`);
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.log(error)

      this.log(`${operation} failed: ${error.message}`)

      return of(result as T);
    }
  }
}
