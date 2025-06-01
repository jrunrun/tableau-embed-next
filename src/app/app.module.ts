import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LucideAngularModule, Home, LogIn, LogOut, Search, User } from 'lucide-angular';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LucideAngularModule.pick({ Home, LogIn, LogOut, Search, User })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
