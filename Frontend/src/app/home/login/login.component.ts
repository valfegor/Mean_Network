import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { UserService } from "../../services/user.service";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public message: string;
  public duratioInseconds: number;
  public registerData:any;


  constructor(private _http:HttpClient , private _userService:UserService , private _snackbar:MatSnackBar , private _router:Router) { 
    this.message = "";
    this.duratioInseconds=2;
    this.registerData={}
   
  }

  ngOnInit(): void {
  }

  login(){
    if(!this.registerData.email || !this.registerData.password){
      this.message = 'Please check all the camps';
      this.penSnackBarError();
      this.registerData={};
    }else{
      this._userService.login(this.registerData).subscribe(
        (res)=>{
          localStorage.setItem('token',res.jwtToken);
          this._router.navigate(['/listPoster']);
          this.registerData={};
        },
        (err)=>{
          this.message = err.error;
          this.penSnackBarError();
          this.registerData={}
        }

      )
    }

  }

  penSnackBarError() {
    this._snackbar.open(this.message, 'X', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.VerticalPosition,
      duration: this.duratioInseconds * 1000,
      panelClass: ['style-snackBarFalse'],
    });
  }

}
