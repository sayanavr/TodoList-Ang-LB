import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {TodosComponent} from './todos/todos.component';
import {NotfoundComponent} from './notfound/notfound.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'todoEdit',component:TodosComponent},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
