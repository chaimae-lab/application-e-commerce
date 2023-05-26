import { Injectable } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class CostomerService {

  constructor(private firebase :AngularFireDatabase) { }
costomerList:AngularFireList<any>;


  form = new FormGroup({
    $key:new FormControl(null),
    Name:new FormControl('',Validators.required),
    // price:new FormControl('',Validators.email),
    price:new FormControl(''),
    imageUrl:new FormControl(''),
    category:new FormControl('')
  });


  getCu(){
    this.costomerList=this.firebase.list('product');
    return this.costomerList.snapshotChanges();
  }
  insertC(customer){
    this.costomerList.push({
      Name:customer.Name,
      price:customer.price,
      imageUrl:customer.imageUrl,
      category:customer.category
      // email:customer.email,
      // mobile:customer.mobile,
      // location:customer.location
    });
  }

  populateForm(customer){
    this.form.setValue(customer);
  }

  updateC(customer){
    this.costomerList.update(customer.$key,{
      Name:customer.Name,
      price:customer.price,
      imageUrl:customer.imageUrl,
      category:customer.category

    });
  }

  deleteC($key:string){
    this.costomerList.remove($key);

  }


  
}
