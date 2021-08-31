import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import { Router } from "@angular/router";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-register-post',
  templateUrl: './register-post.component.html',
  styleUrls: ['./register-post.component.css']
})
export class RegisterPostComponent implements OnInit {
  public registerData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;
  constructor(private _postService:PostService,private _router:Router  , private _snackbar:MatSnackBar ) {
    this.message = '';
    this.duratioInseconds=2;
    this.registerData={};
   }

  ngOnInit(): void {
  }

  registerPost(){
    if(!this.registerData.text || !this.registerData.estade){
      this.message = 'Sorry Check all the camps',
      this.openSnackBarError;
      this.registerData={};
    }
    else{
      this._postService.registerPost(this.registerData).subscribe(
        (res)=>{
          this._router.navigate(['/registerUser']);
          this.message='Success Register the post';
          this.openSnackBarError();
          this.registerData={};
        }, 
        (err)=>{
          this.message = err.error;
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
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarTrue']
    });
  }

  openSnackBarError() {
    this._snackbar.open(this.message,'X',{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.VerticalPosition,
      duration:this.duratioInseconds*1000,
      panelClass:['style-snackBarFalse']
    });
  }

}
