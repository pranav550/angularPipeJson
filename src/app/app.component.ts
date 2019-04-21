import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularJsonPipe';
  employees=[
    {"id":1, "name":"Rahul"},
    {"id":2, "name":"Ravi"},
    {"id":3, "name":"Rishi"},
    {"id":4, "name":"Rohan"}
  ]
}
