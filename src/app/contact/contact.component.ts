import { Component, OnInit } from '@angular/core';
import { ContactService } from '../service/contact.service';
import { CostomerService } from '../shared/costomer.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  productArray=[];
  constructor(public costomerService:ContactService) { }
submitted:boolean;
showSuccessMessage:boolean;
formControls =this.costomerService.form.controls;
  ngOnInit(): void {
    this.costomerService.getCu().subscribe(
      list =>{
this.productArray =list.map(item =>{
return {
  $key:item.key,
  ...item.payload.val()
};
});
      });
  }


  onSubmit(){
    this.submitted=true;
    if(this.costomerService.form.valid){
      if(this.costomerService.form.get('$key').value ==null)
this.costomerService.insertC(this.costomerService.form.value);
else
this.costomerService.updateC(this.costomerService.form.value);

this.showSuccessMessage=true;
setTimeout(() => this.showSuccessMessage=false,3000);
      this.submitted = false;
      this.costomerService.form.reset();
    }

  }
}
