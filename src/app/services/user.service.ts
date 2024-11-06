import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { PlanType, User } from '../types';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSubject = new BehaviorSubject<User>({name: '', email: '', phone: '', planType: PlanType.MONTHLY});
  user$ = this.userSubject.asObservable();

  usersDb?: string | null;
  constructor() { 
    // this.usersDb = localStorage.getItem('users');
    // if (this.usersDb) {
    //   this.userSubject.next(JSON.parse(this.usersDb))      
    // } else {
    //   localStorage.setItem('users', JSON.stringify([]));
    // }
  }

  setUser(user: User) {
    this.userSubject.next(user)
    // localStorage.setItem('users', JSON.stringify(user))
  }
  updateUser(user: User) {
    this.setUser(user)
    // localStorage.setItem('users', JSON.stringify(user))
  }
}
