import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components modules start
import { RegisterUserComponentComponent } from './components/register-user-component/register-user-component.component';
import { LoginUserComponentComponent } from './components/login-user-component/login-user-component.component';
// components modules end

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginUserComponentComponent },
  { path: 'register', component: RegisterUserComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
