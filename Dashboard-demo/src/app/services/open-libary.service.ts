import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OpenLibaryService{
  baseUrl="http://openlibrary.org/"
  coverUrl="http://covers.openlibrary.org/b/olid/"
  format=".jpg"

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8'
    })
  };
  constructor(
    private http: HttpClient
  ) {}

  async search(bookname: string,option:string,page:number){
    const response = await this.http.get(`${this.baseUrl}search.json?${option}=${bookname}&page=${page}`).toPromise();
    return response
  }

  getCover(boid:string,size:string){
    return `${this.coverUrl}${boid}-${size}${this.format}`
  }
}
