import { Component, OnInit } from '@angular/core';
import { PostService } from "../../services/post.service";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-posters',
  templateUrl: './list-posters.component.html',
  styleUrls: ['./list-posters.component.css']
})
export class ListPostersComponent implements OnInit {
  public postData: any;
  public message: string;
  public horizontalPosition: MatSnackBarHorizontalPosition = 'end';
  public VerticalPosition: MatSnackBarVerticalPosition = 'top';
  public duratioInseconds: number;
  
  constructor(private _postService:PostService , private _snackbar:MatSnackBar) {
    this.postData = {}
    this.message = ""
    this.duratioInseconds=2;
   }

   ngOnInit(): void {
    this._postService.listPost().subscribe(
      (res)=>{
        
        this.postData=res.post;
        console.log(this.postData);
      },
      (err)=> {
        this.message = err.error;
        this.openSnackBarError();
      }
    )
  }

  updatePost(post: any,estade:string) {
    console.log(post)
      let tempStatus = post.estade;
      post.estade = estade;

      this._postService.updatePost(post).subscribe(
        (res)=>{
          this.message = `succesfull change the estade of ${post.text} to ${post.estade}`;
          this.openSnackBarSuccesfull();
          post.estade = estade;
        },
        (err)=> {
          post.estade = tempStatus;
          this.message = err.error;
          this.openSnackBarError();
        }

      )
  }

  deletePost(post: any){
    console.log(post._id)
    this._postService.deletePost(post).subscribe(
      (res)=>{
        
        let index = this.postData.indexOf(post);
        if(index > -1){
          this.postData.splice(index,1);
          this.message = "Post Eliminated Succesfully"
          this.openSnackBarSuccesfull()
        }
        else{
          this.message='Cant eliminate Post please try again';
          this.openSnackBarError();
        }
      }
    )
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
