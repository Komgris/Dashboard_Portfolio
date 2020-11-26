import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartLibraryComponent } from './cart-library.component';

describe('CartLibraryComponent', () => {
  let component: CartLibraryComponent;
  let fixture: ComponentFixture<CartLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
