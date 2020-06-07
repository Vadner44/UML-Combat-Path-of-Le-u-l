import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevWindowComponent } from './dev-window/dev-window.component';


const routes: Routes = [{ path: 'dev', component: DevWindowComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevRoutingModule { }
