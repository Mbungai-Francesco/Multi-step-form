import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ButtonPrevComponent } from "../../components/shared/button-prev/button-prev.component";
import { UserService } from '../../services/user.service';
import { User } from '../../types';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ButtonPrevComponent, RouterLink, CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  user!: User
  sum = 0
  thanks !: boolean

  constructor(
    private sharedService: SharedService,
    private userService: UserService
  ) {
    userService.user$.subscribe((user) => {
      this.user = user
    })
  }

  ngOnInit() {
    this.thanks = false
    this.sharedService.triggerUpdateTitle()
    this.user.addOns.forEach((res) => {
      if (this.user.planType == "Monthly") {
        this.sum += res.pMo
      } else {
        this.sum += res.pYr
      }
    })
    if (this.user.plan)
    this.sum += this.user.planType == "Monthly" ? this.user.plan.pMo : this.user.plan.pYr
  }

  // beriWo(){
  //   thank
  // }


}
