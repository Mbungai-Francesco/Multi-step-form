import { Component } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { ButtonPrevComponent } from "../../components/shared/button-prev/button-prev.component";
import { UserService } from '../../services/user.service';
import { User } from '../../types';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-summary',
  standalone: true,
  imports: [ButtonPrevComponent, RouterLink],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.css'
})
export class SummaryComponent {

  user!: User

  constructor(
    private sharedService: SharedService,
    private userService: UserService
  ) {
    userService.user$.subscribe((user) => {
      this.user = user
    })
  }

  ngOnInit() {
    this.sharedService.triggerUpdateTitle()
  }
}
