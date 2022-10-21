import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { DataService } from './../../Services/data.service'
import { ParseTreeResult } from '@angular/compiler';
import { OAuthService } from 'angular-oauth2-oidc';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

type ProfileType = {
  givenName?: string,
  surname?: string,
  userPrincipalName?: string,
  id?: string,
  sub?: string
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loginDisplay = false;
  profile!: ProfileType;
  getResponse: any;
  orgList: any;
  formData: any;
  public email: string;
  sub: string;
  name: any;
  UserInfo: any
  testvalue: boolean = true
  title = 'HQ SOFTWARE CONSULTING';
  isIframe = false;


  public ShowHide: boolean;
  private readonly _destroying$ = new Subject<void>();
  constructor(public sso: OAuthService, private http: HttpClient, private auth: DataService, 
    private route: ActivatedRoute, private router: Router, private ds: DataService) { }


  ngOnInit(): void {
 this.ShowHide=true

 if(this.sso.hasValidAccessToken()){
  this.router.navigateByUrl('/post/index');
 }
  }

  logOut(){
    this.router.navigateByUrl('/post/index');
  }
}