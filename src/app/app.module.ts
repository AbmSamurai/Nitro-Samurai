import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AmChartsModule} from '@amcharts/amcharts3-angular'
import { environment } from '../environments/environment';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './Login-Register/login/login.component';
import { RegisterComponent } from './Login-Register/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AmChartsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
