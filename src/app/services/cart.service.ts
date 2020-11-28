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
    this.currentCart.subscribe(value=>{
      this.cartModel = value;
    })
    this.cartModel.push(cart);
    this.cartSource.next(this.cartModel);
    console.log(this.cartModel);
  }

  removeCart(uuid:string){
    this.currentCart.subscribe(value=>{
      this.cartModel = value;
    });
    this.cartModel = this.cartModel.filter(x=>x.id!=uuid);
    this.cartSource.next(this.cartModel);
  }

}
