import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenLibaryService{
  baseUrl="http://openlibrary.org/"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(
    private http: HttpClient
  ) {}

  async search(bookname: string){
    const response = await this.http.get(`${this.baseUrl}search.json?q=${bookname}`).toPromise();
    return response
  }
}
