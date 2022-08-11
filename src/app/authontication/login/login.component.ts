import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/serviceConnexion/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthentificationService, private router:Router) { }

  ngOnInit(): void {
  }

  onLogin(data:any){
    console.log(data.username);
    this.authService.login(data.username,data.password);
    if (this.authService.isAuthenticated) {
      this.router.navigateByUrl('');

    }
  }
 
}
