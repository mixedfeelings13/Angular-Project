import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl: 'product-box.component.html'
})
export class ProductBoxComponent implements OnInit {

  @Input() fullWidthMode = false;
  product: Product | undefined = {
    id: 1,
    title: 'sneakers',
    price: 150,
    category: 'shoes',
    description: 'this is a pair of sneakers',
    image: 'https://via.placeholder.com/150'
  };

  @Output() addToCart = new EventEmitter<Product>();
  
  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

}
