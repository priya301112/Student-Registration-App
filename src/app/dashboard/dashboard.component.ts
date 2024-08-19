import { Component,OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {


  constructor(private userSer:UserService, private router:Router){}

  ngOnInit(){
    this.getData();
  }

  userArray:any;

  p:any;

  delete(id:any){
    if (confirm(`Do you want to delete the record with ID ${id}?`)) 
    {
    this.userSer.deleteUser(id).subscribe(
      (resp)=>{
        console.log(resp);
      },
      (err)=>{
        console.log(err);
      }
    )
   }
  }

  update(id:any){

    this.router.navigate([`/update/${id}`]);
  }

  getData(){
    this.userSer.getUsers().subscribe(
      (resp)=>{
        this.userArray=resp;
        console.log(this.userArray);
      },
      (err)=>{
        console.log(err);
      }
    )
  }
}
