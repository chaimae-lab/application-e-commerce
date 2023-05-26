import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products } from '../models/product';
import { Observable } from 'rxjs';
const apiUrl="http://localhost:3000/products";
import { ProductUrl } from "src/app/config/api";
@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http :HttpClient) { }


  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(ProductUrl);
   }
 

// getProducts():Products[]{
// return this.product
// }

}
