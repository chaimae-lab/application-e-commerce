import { Injectable } from '@angular/core';
import { Products } from '../models/product';
import { Product } from '../components/product';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
product:Products[]=[
  new Products(1,'product 1','this',100),
  new Products(1,'product 1','this',100),
  new Products(1,'product 1','this',100),
  new Products(1,'product 1','this',100),
  new Products(1,'product 1','this',100),

]
  constructor() { }

getProduct():Products[]{
  return this.product

}

}
