import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ILibraryCart } from '../interfaces/library-cart.interface';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartModel:ILibraryCart[]=[];
  private cartSource = new BehaviorSubject(this.cartModel);
  currentCart:Observable<ILibraryCart[]> = this.cartSource.asObservable();

  constructor() { }

  addCart(cart:ILibraryCart){
    let bookList:ILibraryCart[]=[]; 
    this.currentCart.subscribe(value=>{
      bookList = value;
    })
    bookList.push(cart);
    this.cartSource.next(bookList);
    console.log(bookList);
  }

  removeCart(uuid:string){
    let bookList:ILibraryCart[]=[]; 
    this.currentCart.subscribe(value=>{
      bookList = value;
    })
    bookList = bookList.filter(x=>x.id!=uuid);
    this.cartSource.next(bookList);
  }

}
