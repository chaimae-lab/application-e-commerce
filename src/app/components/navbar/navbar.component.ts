import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  user: firebase.User;
  isLoggedIn :boolean=false;
  userLoggedIn:string;
    constructor(private auth: AuthService, 
    private router: Router) { }

  ngOnInit() {
    this.auth.getUserState()
      .subscribe( user => {
if(user){
  this.isLoggedIn =true;
  this.userLoggedIn=user.email;
} else{
  this.isLoggedIn=false;
}

})
  }

  logout() {
    this.auth.logout();
    return this.router.navigate(['/login']);
  }

  // logout(){
  //   this.s.logout()
  //     }




  
}
