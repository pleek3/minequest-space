import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {HomeComponent} from './components/home/home.component';
import {UserDetailComponent} from "./components/user-detail/user-detail.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'users/:name', component: UserDetailComponent},
  {path: '', component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
