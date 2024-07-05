import { Routes } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { PlanComponent } from './plan/plan.component';

export const routes: Routes = [
  {
    path: ':id',
    component: InfoComponent
  },
  {
    path: 'plan/:id',
    component: PlanComponent
  }
];
