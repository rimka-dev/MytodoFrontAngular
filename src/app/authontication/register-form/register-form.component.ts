import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  user : User = new User("","","","","","");

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  registerForm(value:User){
    this.user = value;
    console.log(this.user);
    /*if (this.user == new User("","","","","","") ) {
      this.router.navigateByUrl('/login');
    }*/
    
  }

  reset(value:NgForm){
    value.resetForm();
  }

}
