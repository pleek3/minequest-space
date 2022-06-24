import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from './MaterialComponent';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './partials/navbar/navbar.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import {FormsModule} from "@angular/forms";
import { CrateDetailComponent } from './components/crate-detail/crate-detail.component';
import { CratesComponent } from './components/crates/crates.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    HomeComponent,
    NavbarComponent,
    UserDetailComponent,
    CrateDetailComponent,
    CratesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule
  ],
  exports: [MaterialModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
