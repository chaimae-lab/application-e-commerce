import { Injectable } from '@angular/core';
import { Pro } from './models/pro';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database/database';

@Injectable({
  providedIn: 'root'
})
export class ProtestService {

  private dbPath = '/product';
 
  proRef: AngularFireList<Pro> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.proRef = db.list(this.dbPath);
  }
 
  createCustomer(customer: Pro): void {
    this.proRef.push(customer);
  }
 
  updateCustomer(key: string, value: any): Promise<void> {
    return this.proRef.update(key, value);
  }
 
  deleteCustomer(key: string): Promise<void> {
    return this.proRef.remove(key);
  }
 
 
 
  deleteAll(): Promise<void> {
    return this.proRef.remove();
  }
}
