import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {

  constructor(private userSer:UserService,private router:Router){}

  register(registerForm:any){
    this.userSer.addUser(registerForm.value).subscribe(
      (resp)=>{
        console.log(resp);
        this.router.navigate(["/dashboard"]);
        alert("Use Added Successfully");
      },
      (err)=>{
        console.log(err);
      }
    )
    
  }

}
