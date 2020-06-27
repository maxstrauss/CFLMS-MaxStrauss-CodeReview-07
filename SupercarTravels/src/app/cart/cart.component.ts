import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  price;
  img;


  constructor(public cartService: CartService, public formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      email: ''
    });
  }

  ngOnInit() {
    this.items = this.cartService.getItems();
    let price = 0;
    for (let i = 0; i < this.items.length; i++) {
      price += this.items[i].price;
      console.log("price:" + price)
    }
    if (price > 500) {
      this.price = price * 0.8;
    } else if (price > 200) {
      this.price = price * 0.9;
    } else {
      this.price = price;
    }



  }
  onSubmit(customerData) {
    window.alert("Thank you for your purchase!");

    this.items = this.cartService.clearCart();
    this.checkoutForm.reset();
  }

}
