import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from '../serviceConnexion/authentification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public authService : AuthentificationService) { }

  ngOnInit(): void {
  }

}
