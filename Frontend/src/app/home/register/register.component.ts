import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from "../../services/user.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public durationInseconds:number;

  constructor(private _router:Router , private _userService:UserService , private _snackbar:MatSnackBar) {
    this.message = "";
    this.durationInseconds = 2;
    this.registerData = {}

   }
  
  ngOnInit(): void {
  }

  registerUser(){
      if(!this.registerData.name || !this.registerData.email || !this.registerData.password){
        this.message = 'Sorry check all the camps please';
        this.openSnackBarError();
        this.registerData={};
      }
      else{
        this._userService.registerUser(this.registerData).subscribe(
          (res)=>{
            localStorage.setItem('token',res.jwtToken);
            this.message = 'successfully Register The user';
            this.openSnackBarSuccesfull();
            this._router.navigate(['/registerPost']);
            this.registerData={};
          },
          (err)=>{
            this.message=err.error;
            this.openSnackBarError();
          }

        )
      }
  }

  openSnackBarSuccesfull() {
    //this.messague = por que ha estado cambiando , {} = CONFIGURACIONES DE LA BARRA , propiedad de la duracion 
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.durationInseconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }
  
  openSnackBarError() {
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.durationInseconds*1000,
      panelClass:['style-snackBarFalse']
    });
  }
}
