import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {


  constructor(private route:ActivatedRoute,private userSer:UserService,private router:Router){}

    ngOnInit(){
      this.getUser();
    }
    
    cid=this.route.snapshot.params[`id`];
    cUser:any;

    update(data:any){
      this.userSer.updateUser(data.value,this.cid).subscribe(
        (resp)=>{
          console.log(resp);
          this.router.navigate(["/dashboard"]);

        },
        (err)=>{
          console.log(err);
        }
      )
    }

    getUser(){
      this.userSer.currentUser(this.cid).subscribe(
        (resp)=>{
          console.log(resp);
          this.cUser=resp;
        },
        (err)=>{
          console.log(err);

        }
      )
    }

  
}
