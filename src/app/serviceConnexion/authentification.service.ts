import { Injectable } from '@angular/core';
import { faL } from '@fortawesome/free-solid-svg-icons';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private users = [
    {username:"admin", password:"1234", roles:['ADMIN', 'USER']},
    {username:"user1", password:"1234", roles:['USER']}
  ];

  public isAuthenticated:boolean = false;
  public userAuthenticated:any= undefined;

  constructor() { }

  public login(username:string,password:string){
    let user;
    this.users.forEach(el => {
      if ( el.username == username && el.password == password) {
        user=el;
      }
      
    });
    if (user) {
      this.isAuthenticated=true;
      this.userAuthenticated=user;
    }else{
      this.isAuthenticated=false;
      this.userAuthenticated=undefined;
    }
  };

  public isAdmin(){
    if(this.userAuthenticated){
      if(this.userAuthenticated.roles.includes('ADMIN'))
        return true;
      }
      return false;
    };

    
  


}
