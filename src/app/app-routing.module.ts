import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestComponent } from './test/test.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  { path: 'tests', component: TestComponent},
  { path: 'messages', component: MessagesComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
