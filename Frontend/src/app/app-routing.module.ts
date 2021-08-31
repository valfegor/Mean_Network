import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './home/login/login.component';
import { RegisterComponent } from './home/register/register.component';
import {AuthGuard  } from "../app/guard/auth.guard";
import { RegisterPostComponent } from "../app/post/register-post/register-post.component";
import { ListPostComponent } from "../app/post/list-post/list-post.component";

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent,
    pathMatch:'full',
    
    
  },
  {
    path:'registerUser',
    component:RegisterComponent,
    pathMatch:'full'
  },
  {
    path:'registerPost',
    component:RegisterPostComponent,
    pathMatch:'full',
    canActivate:[AuthGuard]
  },
  {
    path:'listPost',
    component:ListPostComponent ,
    pathMatch:'full',
    canActivate:[AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
