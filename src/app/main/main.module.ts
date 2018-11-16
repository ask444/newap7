import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {
    path: '', component: MainComponent,
    children:[
      // { path: '', redirectTo:'dashboard',pathMatch:'full' },
      { path: 'dashboard', component: DashboardComponent },
      // { path: 'second', component: SecondComponent },
      { path: '', component: DashboardComponent }
    ]  

  }
];


@NgModule({
  declarations: [MainComponent, DashboardComponent],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MainModule { }
