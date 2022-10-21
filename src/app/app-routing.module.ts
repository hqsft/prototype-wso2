import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{HomeComponent} from './Components/home/home.component'
import { OAuthService } from 'angular-oauth2-oidc';

const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},

  {path: 'login', component: HomeComponent},
 
  {
    path: 'post',
    // canActivate: [OAuthService],
    loadChildren: () =>
      import('./Modules/post/post.module').then((m) => m.PostModule),
  }

  ,{path:'**', redirectTo:''}
];

const isIframe = window !== window.parent && !window.opener;

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: !isIframe ? 'enabledBlocking' : 'disabled' // Don't perform initial navigation in iframes
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }