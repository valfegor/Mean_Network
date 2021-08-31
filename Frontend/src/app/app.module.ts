import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { HeaderComponent } from './home/header/header.component';
import { LoginComponent } from './home/login/login.component';
import { FooterComponent } from './home/footer/footer.component';
import { RegisterComponent } from './home/register/register.component';
import { PostComponent } from './user/post/post.component';
import { ListPostComponent } from './user/list-post/list-post.component';

import { FormsModule,ReactiveFormsModule } from "@angular/forms";

//import angular material.

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from "@angular/material/icon";
import { MatDatepickerModule} from "@angular/material/datepicker";
import {MatGridListModule} from '@angular/material/grid-list'; 


//servicios.

import { UserService } from "../../src/app/services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    FooterComponent,
    RegisterComponent,
    PostComponent,
    ListPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    MatToolbarModule, 
    MatButtonModule,
    MatFormFieldModule, 
    MatCardModule,
    MatIconModule, 
    MatInputModule,   
    MatSnackBarModule,
    MatDatepickerModule,
    MatGridListModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
