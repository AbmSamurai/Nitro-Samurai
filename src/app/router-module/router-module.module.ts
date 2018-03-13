import { TeamViewComponent } from './../components/team-view/team-view.component';
import { SprintDetailsComponent } from "./../components/sprint-details/sprint-details.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "../app.component";
import { BurndownChartComponent } from "../components/burndown-chart/burndown-chart.component";

export const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
   { path: "home", component: AppComponent },
  { path: 'team-view', component: TeamViewComponent },
  {
    path: "team-view/:teamname",
    component: AppComponent,
    children: [
      { path: "", redirectTo: "sprint", pathMatch: "full" },
      { path: "sprint", component: SprintDetailsComponent },
      { path: "burndown", component: BurndownChartComponent }
    ]
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RouterModuleModule {}
