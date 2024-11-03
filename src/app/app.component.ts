import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { WINDOW } from './app.config';

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

  currentPath !: string;

  constructor(@Inject(WINDOW) private window: Window) {}

  checkRoute = () =>{
    this.currentPath = this.window.location.pathname.split('/')[1]
    console.log(this.currentPath);
  }

  ngOnInit(){
    this.checkRoute()
  }
}
