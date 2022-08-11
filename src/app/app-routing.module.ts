import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authontication/login/login.component';
import { RegisterFormComponent } from './authontication/register-form/register-form.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PageAccueilComponent } from './page-accueil/page-accueil.component';

const routes: Routes = [
  {path:'accueil', component: PageAccueilComponent},
  {path:'', redirectTo:'accueil', pathMatch: 'full'},
  {path:'contact', component: ContactComponent},
  {path:'register', component: RegisterFormComponent},
  {path: 'login', component: LoginComponent},
  {path:'**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
