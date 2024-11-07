import { Component, Input } from '@angular/core';
import { AddOns, User, PlanType } from '../../../types';
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-adds',
  standalone: true,
  imports: [],
  templateUrl: './adds.component.html',
  styleUrl: './adds.component.css'
})
export class AddsComponent {
  @Input({required: true}) add !: AddOns
  user !: User


  constructor(private userService : UserService){
    this.userService.user$.subscribe((user) => {
      this.user = user
    })
  }

}
