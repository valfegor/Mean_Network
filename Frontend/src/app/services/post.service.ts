import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PostService {
  env:string;
  constructor(private _router:Router , private _http:HttpClient) {
    this.env = environment.APP_URL;
   }

   registerPost(post:any){
    return this._http.post<any>(this.env+'post/registerPost',post);
   }

   listPost(){
     return this._http.get<any>(this.env+'post/listPost')
   }

   updatePost(post:any){
     return this._http.put<any>(this.env+'post/updatePost',post);
   }
   
   deletePost(poster:any){
     return this._http.delete<any>(this.env+'post/deletePost/'+ poster._id);
   }
}
