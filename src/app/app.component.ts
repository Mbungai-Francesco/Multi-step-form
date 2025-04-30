import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { WINDOW } from './app.config';
import { User } from './types';
import { UserService } from './services/user.service';
import { SharedService } from './services/shared/shared.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Multi-Step-Form';
  prev = ''
  next = ''
  user !: User
  currentPath !: string;

  constructor(
    @Inject(WINDOW) private window: Window, private userService : UserService,
    private sharedService: SharedService
  ) {}

  getUsers = () =>{
    this.userService.user$.subscribe((user) => {
      this.user = user
    });
    console.log(this.user); 
  }

  // checkRoute = () =>{
  //   this.currentPath = this.window.location.pathname.split('/')[1]
  //   console.log(this.currentPath);
  // }

  ngOnInit(){
    this.sharedService.triggerUpdateTitle()
  }
}
