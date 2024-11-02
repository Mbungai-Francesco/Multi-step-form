import { Routes } from '@angular/router';
import { InfoComponent } from './pages/info/info.component';
import { PlanComponent } from './pages/plan/plan.component';
import { AddOnsComponent } from './pages/add-ons/add-ons.component';
import { SummaryComponent } from './pages/summary/summary.component';

export const routes: Routes = [
  {
    path: "",
    redirectTo: "/info",
    pathMatch: "full"
  },
  {
    path: "info",
    component: InfoComponent,
  },
  {
    path: "plan",
    component: PlanComponent
  },
  {
    path: "addOns",
    component: AddOnsComponent
  },
  {
    path: "summary",
    component: SummaryComponent
  }
];
