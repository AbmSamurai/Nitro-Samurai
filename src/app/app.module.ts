import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireModule } from "angularfire2";
import { AngularFirestoreModule } from "angularfire2/firestore";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { environment } from "../environments/environment";
import { SprintDropdownComponent } from "./components/sprint-dropdown/sprint-dropdown.component";
import { SprintDetailsComponent } from "./components/sprint-details/sprint-details.component";
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { MaterialDesignModule } from './material-design/material-design.module';


@NgModule({
  declarations: [
    AppComponent,
    SprintDropdownComponent,
    SprintDetailsComponent,
    TopNavigationComponent
  ],

  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AmChartsModule,
    BrowserAnimationsModule,
    MaterialDesignModule,
     FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
