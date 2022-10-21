import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'; // Import 
import { OAuthModule } from 'angular-oauth2-oidc';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Components/home/home.component';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { PostModule } from './Modules/post/post.module';

import {DataTablesModule} from 'angular-datatables';



@NgModule({
  declarations: [    
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    
    
  ],
  imports: [
    PostModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatToolbarModule,
    MatListModule,
    HttpClientModule,
   
    
    DataTablesModule,
    OAuthModule.forRoot()
  ],
  providers: [
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }