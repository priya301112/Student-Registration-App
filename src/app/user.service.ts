import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {}

    baseUrl="http://localhost:3000";

    public addUser(userData:any){
      return this.http.post(this.baseUrl+'/User',userData);
    }

    public getUsers(){
      return this.http.get(this.baseUrl+'/User');
    }


    public deleteUser(id:any){
      return this.http.delete(this.baseUrl+`/User/${id}`);
    }

    public currentUser(id:any){
      return this.http.get(this.baseUrl+`/User/${id}`);
    }

    public updateUser(userData:any,id:any){
      return this.http.put(this.baseUrl+`/User/${id}`,userData);
    }


   }

