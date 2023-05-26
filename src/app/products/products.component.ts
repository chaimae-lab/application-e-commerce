import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { CostomerService } from '../shared/costomer.service';
import { CategoriesService } from '../service/categories.service';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../services/cart.service';
import { ShoppingCartService } from '../service/shopping-cart.service';
import { Products } from '../models/product';
import { MessengerService } from '../services/messenger.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  productlist:Products[]=[]
  add:number=-1
  submitted:boolean;
showSuccessMessage:boolean;
products;
category$;
filerproduct:any[]=[];
category='';
  constructor(private productService:CostomerService,
    private categorieserivce:CategoriesService,
    private route:ActivatedRoute,
    public serviceShopping: ShoppingCartService,
   private p:ProductsService,
   private msg :MessengerService) { 

    this.categorieserivce.getCategory().subscribe(
      list =>{
this.category$ =list.map(item =>{
return {
  $key:item.key,
  ...item.payload.val()
};
});


      });


    this.productService.getCu().subscribe(
      list =>{
this.products =list.map(item =>{
return {
  $key:item.key,
  ...item.payload.val()
};
});
// this.route.queryParamMap.subscribe(params =>{
//   this.category=params.get('category')
//   this.filerproduct=(this.category) ?
// })

      });




  }

  ngOnInit(): void {
    this.p.getProducts().subscribe((product) => {
      this.productlist=product;
    })
  }
  // addtocart(){
  //   this.cartService.addToCart(this.products)
  // }
  
  addToCart(index:number){
    // this.serviceShopping.addToCart(this.products)
this.add= +index

}

buy(amount:number){
let selectedProduct= this.products[this.add]
let data={
  name:selectedProduct.name,
  amount:+amount,
  price:selectedProduct.price
}
// this.serviceShopping.addToCart(data).then(()=> this.add = -1)
}

handleAddToCart(){
  // this.msg.sendMsg(this.product)
}
}
