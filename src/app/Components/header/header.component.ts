import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './../../Services/data.service'
import { Router } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  title = 'HQ SOFTWARE CONSULTING';
  isIframe = false;
  loginDisplay = false;
  testvalue: boolean = true
  private readonly _destroying$ = new Subject<void>();
  public sessionStorage = sessionStorage;
  document: any;

  constructor(public sso: OAuthService, private http: HttpClient,
 private ds: DataService, private router: Router) { }

  ngOnInit() {
    setTimeout(function () {
      console.log(sessionStorage.getItem('access_token'));
      //this.router.navigate(['/post/index']);

    }, 5000);
    const val = JSON.parse(sessionStorage.getItem('id_token_aasclaims_obj'))

    console.log(val.sub);
    if (this.sso.hasValidAccessToken() == true) {
      this.document.location.href = '/csac/post/index';
    } else {
      this.router.navigateByUrl('/login');

    }
  }
  ngOnDestroy(): void {
    this._destroying$.next(undefined);
    this._destroying$.complete();
  }

}
