import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { ILibraryCart } from 'src/app/interfaces/library-cart.interface';
import { CartService } from 'src/app/services/cart.service';
import { OpenLibaryService } from 'src/app/services/open-libary.service';

@Component({
  selector: 'app-cart-library',
  templateUrl: './cart-library.component.html',
  styleUrls: ['./cart-library.component.css']
})
export class CartLibraryComponent implements OnInit {
  subscription: Subscription | undefined;
  cartList:ILibraryCart[]=[];
  countList:Number=0;
  constructor(
    private modalService: NgbModal,
    private cartService: CartService,
    private openLibaryService: OpenLibaryService
  ) { }

  ngOnInit(): void {
    this.subscription = this.cartService.currentCart.subscribe(async list => {
      this.cartList = list;
      this.countList = list.length;
    });
  }

  setImage(ibo: string) {
    return this.openLibaryService.getCover(ibo, 'S');
  }

  remove(uuid:string){
    this.cartService.removeCart(uuid);
  }

}
