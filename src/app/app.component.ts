import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  dummyJson: string;
  constructor(
    private http: HttpClient
  ) {}

  fetchJSON() {
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data => {
      this.dummyJson = JSON.stringify(data)
    })
    
  }
}
