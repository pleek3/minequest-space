import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthComponent} from './components/auth/auth.component';
import {HomeComponent} from './components/home/home.component';
import {UserDetailComponent} from "./components/user-detail/user-detail.component";
import {CrateDetailComponent} from "./components/crate-detail/crate-detail.component";
import {CratesComponent} from "./components/crates/crates.component";

const routes: Routes = [
  {path: 'login', component: AuthComponent},
  {path: 'users', component: UserDetailComponent},
  {path: 'users/:name', component: UserDetailComponent},
  {path: 'crates', component: CratesComponent},
  {path: 'crates/:name', component: CrateDetailComponent},
  {path: '', component: HomeComponent, pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
