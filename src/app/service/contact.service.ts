import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ContactService {


  constructor(private firebase :AngularFireDatabase) { }
costomerList:AngularFireList<any>;


  form = new FormGroup({
    $key:new FormControl(null),
    Name:new FormControl('',Validators.required),
    // price:new FormControl('',Validators.email),
    email:new FormControl(''),
    msg:new FormControl(''),
    phone:new FormControl('')
  });


  getCu(){
    this.costomerList=this.firebase.list('contact');
    return this.costomerList.snapshotChanges();
  }
  insertC(customer){
    this.costomerList.push({
      Name:customer.Name,
      email:customer.email,
      msg:customer.msg,
      phone:customer.phone
      // category:customer.category
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
      email:customer.email,
      msg:customer.msg,
      phone:customer.phone
      // category:customer.category

    });
  }

  deleteC($key:string){
    this.costomerList.remove($key);

  }

}