import { Injectable } from '@angular/core';
import { Plan } from '../../types';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class PlansService {
  private plansSubject = new BehaviorSubject<Plan[]>([]);
  plans$ = this.plansSubject.asObservable();

  plansDb?: string | null;
  constructor() {
    this.plansDb = localStorage.getItem('plans');
    if (this.plansDb) {
      this.plansSubject.next(JSON.parse(this.plansDb));
    } else {
      localStorage.setItem('plans',JSON.stringify([
          {
            id: 1,
            name: 'Arcade',
            pMo: 9,
            pYr: 90,
            choosen: false,
          },
          {
            id: 2,
            name: 'Advanced',
            pMo: 12,
            pYr: 120,
            choosen: false,
          },
          {
            id : 3,
            name: 'Pro',
            pMo: 15,
            pYr: 150,
            choosen: false,
          },
        ]));
    }
  }

  setPlans(plans: Plan[]) {
    this.plansSubject.next(plans);
    localStorage.setItem('plans', JSON.stringify(plans));
  }

  updatePlans(plan : Plan) {
    let plans = this.plansSubject.getValue();
    for (let i = 0; i < plans.length; i++) {
      if(plans[i].id == plan.id){
        plans[i] = plan
      }
    }
    this.setPlans(plans);
  }
}
