import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';
import { OAuthService } from 'angular-oauth2-oidc';
// import { JwksValidationHandler } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

const ssoConfig = environment.sso;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  constructor(public sso: OAuthService) {
    this.configSSO();
  }
  ngOnInit(): void {
  
  }

  /**
   * Configuring Single Sign-On
   */
  private configSSO(): void {
    this.sso.configure(ssoConfig);

    /** enable below validation only if jwks object is defined as part of oauthconfig obj */
    // this.sso.tokenValidationHandler = new JwksValidationHandler();
    this.sso.setStorage(sessionStorage);

   

    /** commented below because below resource is protected by some identity server ex: wso2 */
    // this.sso.loadDiscoveryDocumentAndTryLogin();

    this.sso.tryLogin();
  }

  
}