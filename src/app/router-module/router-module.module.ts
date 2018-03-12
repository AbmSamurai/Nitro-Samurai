import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { LoginRegisterComponent } from '../login-register/login-register.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';


export const routes: Routes = [
  { path: '', redirectTo: 'AppComponent', pathMatch: 'full' },
  { path: 'home', component: AppComponent },
  { path: 'team-view', component: AppComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'dashboard', component: DashboardComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class RouterModuleModule { }
