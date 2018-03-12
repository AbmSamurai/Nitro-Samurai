import { RouterModuleModule } from './router-module/router-module.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from "angularfire2/firestore";
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/Auth/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestore } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
// import { AmChartsModule } from '@amcharts/amcharts3-angular'
import { environment } from '../environments/environment';
import { LoginRegisterComponent } from './login-register/login-register.component';
import { LoginComponent } from './Login-Register/login/login.component';
import { RegisterComponent } from './Login-Register/register/register.component';
import { MatTabsModule } from '@angular/material/tabs';
import { CdkTableModule } from '@angular/cdk/table';
import { MatFormFieldModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import { ErrorStateMatcher } from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { MaterialDesignModule } from './material-design/material-design.module';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { TeamViewComponent } from './components/team-view/team-view.component';
import { BottomNavigationComponent } from './components/bottom-navigation/bottom-navigation.component';
import { CardComponent } from './components/card/card.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DatabaseService } from './services/database.service';
import { AuthenticationService } from './services/authentication.service';



var config = {
  apiKey: "AIzaSyBl_nMxgOQh4fCkixstzYpvEWVhs4WC7og",
  authDomain: "nitro-samurai.firebaseapp.com",
  databaseURL: "https://nitro-samurai.firebaseio.com",
  projectId: "nitro-samurai",
  storageBucket: "nitro-samurai.appspot.com",
  messagingSenderId: "870754973021"
};


@NgModule({
  declarations: [
    AppComponent,
    LoginRegisterComponent,
    LoginComponent,
    RegisterComponent,
    TopNavigationComponent,
    TeamViewComponent,
    BottomNavigationComponent,
    CardComponent,
    DashboardComponent
  ],

  // exports: [CdkTableModule,
  //   MatTabsModule],

  imports: [
    RouterModuleModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    // AmChartsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    CdkTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule, 
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
    // ShowOnDirtyErrorStateMatcher
    
    
    // BrowserAnimationsModule,
    MaterialDesignModule,
    RouterModule, 
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,   
  ],
  providers: [ErrorStateMatcher,AngularFireAuth,DatabaseService,AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
