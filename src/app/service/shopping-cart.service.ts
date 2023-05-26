import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { take} from  'rxjs/operators';
import { Product } from '../components/product';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  constructor(public db:AngularFireDatabase, private fs :AngularFirestore) { }




  
// addToCart(data:Product){
// return this.fs.collection('users/${this.as.userId}/cart').add(data)
// }




// private create(){
//   return this.db.list('/shopping-carts').push({
//     dateCreated:new Date().getTime()
//   })
// }

// public async getOrCreateCartid(){
// let cardID= localStorage.getItem('cartID');

// if(cardID) return cardID;

// let result = await this.create();
// localStorage.setItem('cartID', result.key);
// return result.key;



// }

//   getItem(cardId:string,productID:string){
//     return this.db.object('/shopping-cards' + cardId + '/items' + productID );

//   }


// async  addToCart(product){  
//     let cardId= await this.getOrCreateCartid();
//     let item$ =this.getItem(cardId,product.key);


//     item$.snapshotChanges().pipe(
//          take(1)).subscribe((item:any) =>{
//       if(item.payload.exists()){
//         item$.update({quantity:item.payload.val().quantity + 1});
//       }else{
//         item.update({
//           product:{
//           // title: product.payload.val().Name,
//           // price:product.payload.val().price,
//           // category:product.payload.val().category,
//           // imageUrl:product.payload.val().imageUrl

//         }
//         ,quantity:1
//         }
        
        
//         );
//       }
//     })

//   }





//   async addToCart(products){
//     let cardId=localStorage.get('cartId');
//     if(!cardId)
//     {
// let cart= await this.db.list('shoppingCart').push({
//   dateCreated:new Date().getTime()
// });
// localStorage.setItem('cardId',cart.key)
// this.AddProductCart(cart.key,products)

//     }
//     else{
// this.AddProductCart(localStorage.get('cardId'),products)
//     }
//   }
//   AddProductCart(idCart,productsAdd){
//  this.db.object('/shoppingCart/'+idCart+'/items'+productsAdd.key)
//  .snapshotChanges()
//  .pipe(
//    take(1)
//  ).subscribe(
//    productsCart =>{
//      if(!productsCart.key)
//      {
//       this.db.list('/shoppingCarts/'+idCart+'/items').set(productsAdd.key,{products:productsAdd})

//      }
//    }
//  )
//   }


  // products:AngularFireList<any>;


  // getCu(){
  //   this.products=this.db.list('cart');
  //   return this.products.snapshotChanges();
  // }
  // addToCart(product){
  //   this.products.push({
  //     Name:product.Name,
  //     price:product.price,
  //     imageUrl:product.imageUrl,
  //     category:product.category
  //     // email:customer.email,
  //     // mobile:customer.mobile,
  //     // location:customer.location
  //   });
  // }

  // // populateForm(customer){
  // //   this.form.setValue(customer);
  // // }

  // updateC(product){
  //   this.products.update(product.$key,{
  //     Name:product.Name,
  //     price:product.price,
  //     imageUrl:product.imageUrl,
  //     category:product.category

  //   });
  // }

  // deleteC($key:string){
  //   this.products.remove($key);

  // }




//   private create(){
//     return this.db.list('/shopping-cards').push({
//       dateCreated: new Date().getTime()
//     })
//   }


//   public async getOrcreateCardid(){
//        let cardID=localStorage.getItem('cardID');
//        if(cardID) return cardID;
       

//        let result =  await this.create();
//        localStorage.setItem('cardID',result.key);
//        return result.key;
//   }
//   getItem(cardId:string,productId:string){
//     return this.db.object('/shopping-cards' + cardId + '/items' + productId );

//   }


// async  addToCart(product){  
//     let cardId= await this.getOrcreateCardid();
//     let item$ =this.getItem(cardId,product.key);


//     item$.snapshotChanges().subscribe((item:any) =>{
//       if(item.payload.exists()){
//         item$.update({quantity:item.payload.val().quantity + 1});
//       }else{
//         item.update({
//           product:{
//           title: product.payload.val().Name,
//           price:product.payload.val().price,
//           category:product.payload.val().category,
//           imageUrl:product.payload.val().imageUrl

//         }
//         ,quantity:1
//         }
        
        
//         );
//       }
//     })

//   }
}
