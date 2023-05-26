import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Products } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { CartItem } from 'src/app/models/cart-item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = [
    // {id:1,productId:1,productName:'test 1',qty:4,price:199,image:'https://www.phillymag.com/wp-content/uploads/sites/3/2016/07/cutest-summer-shades.jpg'},
    // {id:1,productId:1,productName:'test 1',qty:4,price:199},
    // {id:1,productId:1,productName:'test 1',qty:4,price:199},
    // {id:1,productId:1,productName:'test 1',qty:4,price:199},
    // {id:1,productId:1,productName:'test 1',qty:4,price:199},
    // {id:1,productId:1,productName:'test 1',qty:4,price:199}




  ];

  cartTotal = 0

  constructor(
    private msg: MessengerService,
    private cartService: CartService,
  ) { }

  ngOnInit() {
    // this.handleSubscription();
    // this.loadCartItems();

    this.msg.getMsg().subscribe( (product:Products) =>{
     this.cartItems.push({
       productName:product.name,
       qty:3,
       price:product.price
     })
     this.cartTotal = 0
     this.cartItems.forEach(item => {
       this.cartTotal += (item.qty * item.price)
     })
    })
   
  }

  // handleSubscription() {
  //   this.msg.getMsg().subscribe((product: Products) => {
  //     this.loadCartItems();
  //   })
  // }

  // loadCartItems() {
  //   this.cartService.getCartItems().subscribe((items: CartItem[]) => {
  //     this.cartItems = items;
  //     this.calcCartTotal();
  //   })
  // }

  // calcCartTotal() {
  //   this.cartTotal = 0
  //   this.cartItems.forEach(item => {
  //     this.cartTotal += (item.qty * item.price)
  //   })
  // }
}