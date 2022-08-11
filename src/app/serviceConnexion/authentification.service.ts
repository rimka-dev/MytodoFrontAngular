import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private users = [
    {username:"admin", password:"1234", roles:['ADMIN', 'USER']},
    {username:"user1", password:"1234", roles:['USER']}
  ];

  

  constructor() { }
}
