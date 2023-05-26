import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fs: AngularFirestore) { }

  getProduct(){
    return this.fs.collection('products').valueChanges()
  }
}
