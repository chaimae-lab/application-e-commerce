import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  categoryList:AngularFireList<any>;

  constructor(private db:AngularFireDatabase) { }
  

// getcategories(){
// this. db.list('categories').valueChanges();

// }


getCategory(){
  this.categoryList=this.db.list('categories');
  return this.categoryList.snapshotChanges();
}
}
