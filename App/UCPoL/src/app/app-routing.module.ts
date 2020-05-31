import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_helpers';
import {DevModule} from './dev/dev.module';
import {AboutComponent} from './main/about/about.component';

const routes: Routes = [ { path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component: LoginComponent },
{ path: 'register', component: RegisterComponent },
{path: 'about',component: AboutComponent},

// otherwise redirect to home
{ path: '**', redirectTo: '' }];

//@NgModule({
  //imports: [RouterModule.forRoot(routes)],
  //exports: [RouterModule]
//})
export const AppRoutingModule = RouterModule.forRoot(routes);
//export class AppRoutingModule { }
