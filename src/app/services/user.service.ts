import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Plan, PlanType, User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({name: '', email: '', phone: '', planType: PlanType.MONTHLY, addOns : []});
  user$ = this.userSubject.asObservable();

  userDb?: string | null;
  constructor() { 
    const user = this.userSubject.value
    this.userDb = localStorage.getItem('user');
    if (this.userDb) {
      this.userSubject.next(JSON.parse(this.userDb))      
    } else {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }

  setUser(user: User) {
    this.userSubject.next(user)
    // localStorage.setItem('user', JSON.stringify(user))
  }
  updateUser(user: User) {
    this.setUser(user)
    localStorage.setItem('user', JSON.stringify(user))
  }
}
