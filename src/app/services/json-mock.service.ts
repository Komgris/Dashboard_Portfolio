import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonMockService {
  
  baseUrl="https://jsonplaceholder.typicode.com/posts"
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(
    private http: HttpClient
  ) { }

  async getMockData(){
    const response = await this.http.get(this.baseUrl,this.httpOptions).toPromise();
    return response;
  }
}
