import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './page/create-user/create-user.component';
import { HomeComponent } from './page/home/home.component';
import { UserAssignmentComponent } from './page/user-assignment/user-assignment.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'user-management/create-request', component: CreateUserComponent },
  { path: 'user-management/user-assignment', component: UserAssignmentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
