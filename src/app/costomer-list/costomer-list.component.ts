import { Component, OnInit } from '@angular/core';
import { CostomerService } from '../shared/costomer.service';
import  swal from 'sweetalert2';
@Component({
  selector: 'app-costomer-list',
  templateUrl: './costomer-list.component.html',
  styleUrls: ['./costomer-list.component.css']
})
export class CostomerListComponent implements OnInit {
productArray=[];
showSuccessMessage:boolean;
searchText:string;
  constructor(public costomerService:CostomerService) { }

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


  onDelete($key){
if(confirm('Are you sure to delete this record ?')){
  this.costomerService.deleteC($key);
  this.showSuccessMessage=true;
  setTimeout(() => this.showSuccessMessage =false,3000);
}
  }


  filterCondition(c){
    return c.price.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
}
