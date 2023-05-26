import { Component, OnInit } from '@angular/core';
import { Products } from '../models/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
products:Products[]=[]
  constructor(private product:ProductsService) { }

  ngOnInit(): void {
    console.log(this.product.getProduct());
  }


}
