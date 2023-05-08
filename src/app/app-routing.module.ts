import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { NotFoundComponent } from './pages/notFound/not-found/not-found.component';
import { CategoryComponent } from './pages/category/category/category.component';
import { MyCartComponent } from './pages/myCart/my-cart/my-cart.component';
import { LoginComponent } from './pages/login/login/login.component';
import { RegisterComponent } from './pages/register/register/register.component';
import { RecoveryComponent } from './pages/recovery/recovery/recovery.component';
import { ProfileComponent } from './pages/profile/profile/profile.component';
const routes: Routes = [
  {
    path : '',
    redirectTo : '/home',
    pathMatch: 'full'
  },
  {
    path : 'home',
    component : HomeComponent
  },
  {
    path : 'category',
    component : CategoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
