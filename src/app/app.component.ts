import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/shared/navbar/navbar.component";
import { ButtonPrevComponent } from "./components/shared/button-prev/button-prev.component";
import { ButtonNextComponent } from "./components/shared/button-next/button-next.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ButtonPrevComponent, ButtonNextComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Multi-Step-Form';
}
