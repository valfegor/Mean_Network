import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private env:string;
  public message:string;
  public duratioInseconds: number;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top'; 
  constructor(private _http:HttpClient , private _router:Router , private _snackbar:MatSnackBar) {
    this.env=environment.APP_URL;
    this.message = "";
    this.duratioInseconds = 2;
   }

   registerUser(user:any){
     return this._http.post<any>(this.env+'user/registerUser',user);
   }

   login(user:any){
     return this._http.post<any>(this.env+'user/login',user)
   }

   loggedIn(){
     return !!localStorage.getItem('token');
   }

   getToken(){
     return localStorage.getItem('token');
   }

   logout(){
    this.message = 'Logout Success'
    this.openSnackBarSuccesfull();
    localStorage.removeItem('token');
    this._router.navigate(['login'])
   }


   openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion 
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }
}
