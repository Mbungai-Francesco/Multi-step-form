import { Component } from '@angular/core';
import { ButtonPrevComponent } from '../../components/shared/button-prev/button-prev.component';
import { ButtonNextComponent } from '../../components/shared/button-next/button-next.component';
import { SharedService } from '../../services/shared/shared.service';
import { UserService } from '../../services/user.service';
import { User } from '../../types';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-info',
  standalone: true,
  imports: [  ButtonPrevComponent, ButtonNextComponent, FormsModule, CommonModule ],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent {

  user !: User

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
