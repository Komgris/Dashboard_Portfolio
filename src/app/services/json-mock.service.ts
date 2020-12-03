import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JsonMockService {
  
  baseUrl="https://jsonplaceholder.typicode.com/posts";
  catBaseUrl="https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=";
  currencyBaseUrl="https://api.exchangeratesapi.io/latest?base=";
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

  async getRandomCat(amount:number){
    const response = await this.http.get(`${this.catBaseUrl}${amount}`).toPromise();
    return response;
  }

  async getCurrency(base:string){
    const response = await this.http.get(`${this.currencyBaseUrl}${base}`).toPromise();
    return response;
  }
}
