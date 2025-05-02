import { Component, Input } from '@angular/core';
import { AddOns, User, PlanType } from '../../../types';
import { UserService } from '../../../services/user.service';
import { CheckBoxComponent } from '../../shared/check-box/check-box.component';

@Component({
  selector: 'app-adds',
  standalone: true,
  imports: [CheckBoxComponent],
  templateUrl: './adds.component.html',
  styleUrl: './adds.component.css',
})
export class AddsComponent {
  @Input({ required: true }) add!: AddOns;
  user!: User;

  constructor(private userService: UserService) {
    this.userService.user$.subscribe((user) => {
      this.user = user;
    });
  }

  check = () => {
    if (this.add.choosen) {
      console.log(this.user.addOns);
      
      const index = this.user.addOns.indexOf(this.add);
      console.log(index);
      
      this.user.addOns?.splice(index || 0, 1);
      console.log(this.user.addOns);
    }
    else this.user.addOns.push(this.add);
    this.add.choosen = !this.add.choosen;
    console.log(this.user);
    this.userService.updateUser(this.user)
  };

  ngOnInit() {
    console.log(this.add);
    
    this.user.addOns.find((res)=> res.name == this.add.name) ? this.add.choosen = true : this.add.choosen = false
    console.log(this.add);
    // console.log(this.add.choosen);
  }
}
