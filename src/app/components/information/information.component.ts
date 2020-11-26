import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from 'src/app/services/cart.service';
import { OpenLibaryService } from 'src/app/services/open-libary.service';
import { CartLibraryComponent } from '../cart-library/cart-library.component';

import * as uuid from 'uuid';
import { Subscription } from 'rxjs';
declare let alertify: any;

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  keyword: string = 'Percy Jackson';
  maxSize: number = 4;
  bookCount: number = 0;
  mockReport: any;
  subscription: Subscription | undefined;
  searchOption = [
    { key: 'title', value: 'Title' },
    { key: 'author', value: 'Author' }
  ];
  page = 1;
  rowSize = 100;
  cartCount=0;
  selectedOption: string = 'title';
  ngbModalOptions: NgbModalOptions = {
    size:'lg'
  };
  constructor(
    private openLibaryService: OpenLibaryService,
    private cartService: CartService,
    private modalService: NgbModal
  ) { }

  async ngOnInit(): Promise<void> {
    await this.onSearch();
    this.subscription = this.cartService.currentCart.subscribe(async list => {
      this.cartCount = list.length;
    });
  }

  setImage(ibo: string) {
    return this.openLibaryService.getCover(ibo, 'M');
  }

  async onSearch() {
    const data: any = await this.openLibaryService.search(this.keyword, this.selectedOption, this.page);
    this.bookCount = data.numFound;
    this.mockReport = data.docs;
  }

  showCart() {
    this.modalService.open(CartLibraryComponent,this.ngbModalOptions);
  }

  borrow(title: string, author: string[], cover: string) {
    try {
      const randomId = uuid.v4();
      let model = { id: randomId, title: title, author: author, cover: cover };
      this.cartService.addCart(model);
      alertify.success(`Add ${title} Success: see in cart icon`);
    }
    catch (error) {
      alertify.error(error);
    }
  }
}
