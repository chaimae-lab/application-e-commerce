import { Component } from '@angular/core';
import { AuthService } from './service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from './service/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'commercee';



  // constructor(
  //   private authServ:AuthService,
  //   private route :ActivatedRoute,router:Router){
  
  
  //     this.authServ.user$.subscribe(user =>{
  //     if(user){
  //       let returnUrl= this.route.snapshot.queryParamMap.get('returnUrl') 
  //         router.navigateByUrl(returnUrl);
  //     }
  //   })
  // }
}
