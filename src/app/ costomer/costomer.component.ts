import { Component, OnInit } from '@angular/core';
import { CostomerService } from '../shared/costomer.service';
@Component({
  selector: 'app-costomer',
  templateUrl: './costomer.component.html',
  styleUrls: ['./costomer.component.css']
})
export class CostomerComponent implements OnInit {
  productArray=[];
  constructor(public costomerService:CostomerService) { }
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
